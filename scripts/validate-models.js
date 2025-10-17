#!/usr/bin/env node

/**
 * Validate Models Script
 * 
 * Usage:
 *   node scripts/validate-models.js [model-path]
 *   npm run validate [model-path]
 */

const ModelValidator = require('./ModelValidator');
const path = require('path');
const fs = require('fs');

// Get model path from command line or validate all
const args = process.argv.slice(2);
const targetPath = args[0];

async function validateSingleModel(modelPath) {
  const validator = new ModelValidator();
  const results = await validator.validateModel(modelPath);
  validator.printResults();
  
  // Exit with error code if validation failed
  if (results.status === 'failed') {
    process.exit(1);
  }
}

async function validateAllModels() {
  const baseDir = process.cwd();
  const categories = ['Accessories', 'Ammo', 'Explosives', 'Home_Designed', 
                      'Pistols_and_Subs', 'Rifles', 'Tools'];
  
  let totalModels = 0;
  let passedModels = 0;
  let failedModels = 0;
  const allResults = [];

  console.log('='.repeat(60));
  console.log('VALIDATING ALL MODELS');
  console.log('='.repeat(60));

  for (const category of categories) {
    const categoryPath = path.join(baseDir, category);
    
    if (!fs.existsSync(categoryPath)) {
      continue;
    }

    const models = findModels(categoryPath);
    
    for (const modelPath of models) {
      totalModels++;
      const validator = new ModelValidator();
      const results = await validator.validateModel(modelPath);
      
      if (results.status === 'passed') {
        passedModels++;
      } else {
        failedModels++;
      }

      allResults.push({
        path: modelPath.replace(baseDir, ''),
        ...results
      });

      // Print brief result
      const statusIcon = results.status === 'passed' ? '✅' : '❌';
      console.log(`${statusIcon} ${modelPath.replace(baseDir + '/', '')} - Score: ${results.score}/100 (${results.grade})`);
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('VALIDATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total Models: ${totalModels}`);
  console.log(`Passed: ${passedModels} (${Math.round(passedModels/totalModels*100)}%)`);
  console.log(`Failed: ${failedModels} (${Math.round(failedModels/totalModels*100)}%)`);
  
  // Calculate average score
  const avgScore = allResults.reduce((sum, r) => sum + r.score, 0) / totalModels;
  console.log(`Average Score: ${Math.round(avgScore)}/100`);
  
  // Show models that need attention
  const needsAttention = allResults
    .filter(r => r.score < 70)
    .sort((a, b) => a.score - b.score)
    .slice(0, 10);

  if (needsAttention.length > 0) {
    console.log('\n⚠️  MODELS NEEDING ATTENTION (lowest scores):');
    needsAttention.forEach(model => {
      console.log(`  ${model.score}/100 - ${model.path}`);
    });
  }

  // Show top models
  const topModels = allResults
    .filter(r => r.score >= 90)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  if (topModels.length > 0) {
    console.log('\n🏆 TOP QUALITY MODELS:');
    topModels.forEach(model => {
      console.log(`  ${model.score}/100 - ${model.path}`);
    });
  }

  console.log('\n' + '='.repeat(60) + '\n');

  // Save results to file
  const resultsPath = path.join(baseDir, 'validation-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(allResults, null, 2));
  console.log(`Full results saved to: ${resultsPath}\n`);

  // Exit with error if any models failed
  if (failedModels > 0) {
    process.exit(1);
  }
}

function findModels(dirPath, models = []) {
  const files = fs.readdirSync(dirPath);
  
  // Check if this directory has a README.md (indicating it's a model)
  if (files.includes('README.md')) {
    models.push(dirPath);
    return models;
  }

  // Recurse into subdirectories
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      findModels(filePath, models);
    }
  });

  return models;
}

// Main execution
if (targetPath) {
  const fullPath = path.resolve(targetPath);
  validateSingleModel(fullPath);
} else {
  validateAllModels();
}
