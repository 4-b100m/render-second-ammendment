# Contributing to RenderOSArms

Thank you for your interest in contributing to RenderOSArms! This document provides guidelines and best practices for contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Setup](#development-setup)
4. [Coding Standards](#coding-standards)
5. [Contribution Workflow](#contribution-workflow)
6. [Model Submission Guidelines](#model-submission-guidelines)
7. [Documentation](#documentation)
8. [Testing](#testing)
9. [Review Process](#review-process)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of:
- Experience level
- Technical background
- Personal characteristics
- Geographic location

### Expected Behavior

- Be respectful and constructive in discussions
- Welcome newcomers and help them get started
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other contributors

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or inflammatory comments
- Personal attacks
- Publishing others' private information
- Any conduct that could be considered inappropriate

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git
- Text editor or IDE
- Basic knowledge of JavaScript, HTML, CSS

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
```bash
git clone https://github.com/YOUR_USERNAME/renderOSArms.git
cd renderOSArms
```

3. Add upstream remote:
```bash
git remote add upstream https://github.com/4-b100m/renderOSArms.git
```

## Development Setup

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev  # When implemented
```

### Generate Model List

```bash
npm run list
```

### Verify Setup

```bash
npm test  # When implemented
```

## Coding Standards

### JavaScript

- Use ES6+ features where appropriate
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

**Example:**
```javascript
// Good
function filterModelsByTag(models, tag) {
  return models.filter(model => 
    model.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

// Bad
function f(m, t) {
  return m.filter(x => x.tags.some(y => y.toLowerCase() === t.toLowerCase()));
}
```

### HTML

- Use semantic HTML5 elements
- Include proper ARIA labels for accessibility
- Maintain proper indentation (2 spaces)
- Keep markup clean and minimal

### CSS

- Use mobile-first responsive design
- Follow BEM naming convention for classes
- Avoid inline styles
- Use CSS custom properties for theming

**Example:**
```css
/* Good */
.model-card {
  /* Base styles */
}

.model-card__title {
  /* Title styles */
}

.model-card--featured {
  /* Modifier styles */
}
```

### File Organization

- One component per file when appropriate
- Group related functionality together
- Keep files under 300 lines when possible
- Use descriptive file names

## Contribution Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-number-description
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/updates

### 2. Make Your Changes

- Write clean, documented code
- Follow coding standards
- Add tests for new functionality
- Update documentation as needed

### 3. Commit Your Changes

Use conventional commit messages:

```bash
git commit -m "feat: add 3D model viewer component"
git commit -m "fix: resolve search filter bug"
git commit -m "docs: update API documentation"
```

Commit message format:
```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style (formatting)
- `refactor` - Code refactoring
- `test` - Tests
- `chore` - Maintenance

### 4. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub with:
- Clear title and description
- Reference to related issues
- Screenshots for UI changes
- Testing instructions

## Model Submission Guidelines

### Directory Structure

Models should be organized as:
```
Category/Subcategory/Model_Name-Author/
├── README.md
├── STL/
│   ├── part1.stl
│   └── part2.stl
├── STEP/
│   └── assembly.step
└── Renders/
    ├── view1.png
    └── view2.jpg
```

### README.md Requirements

Each model must include a README with:

```markdown
# Model Name

## Description
Brief description of the model

## Specifications
- Caliber: 
- Type: 
- Version: 
- Author: 

## Parts List
1. Part 1 - Quantity, Material
2. Part 2 - Quantity, Material

## Assembly Instructions
Step-by-step assembly guide

## Print Settings
- Layer Height: 
- Infill: 
- Material: 
- Supports: 

## Hardware Required
- List of non-printed parts
- Sources for hardware

## Legal Notice
Appropriate legal disclaimers

## Safety Warnings
Important safety information

## License
License information
```

### File Standards

**STL Files:**
- Binary format preferred
- Manifold (watertight) geometry
- Proper orientation (Z-up)
- Correct units (mm)
- Reasonable polygon count

**Render Images:**
- High quality (1920x1080 minimum)
- Multiple angles
- PNG or JPG format
- Clear lighting and background

**Documentation:**
- Markdown format
- Clear, detailed instructions
- Proper grammar and spelling
- Include measurements and specifications

### Quality Checklist

Before submitting a model:
- [ ] All files properly organized
- [ ] README.md complete and accurate
- [ ] STL files are manifold
- [ ] Renders are high quality
- [ ] Legal disclaimers included
- [ ] Safety warnings included
- [ ] Assembly instructions clear
- [ ] Parts list complete
- [ ] Print settings provided
- [ ] Hardware list included

## Documentation

### When to Update Documentation

- Adding new features
- Changing existing behavior
- Adding new API endpoints
- Updating dependencies
- Changing configuration

### Documentation Standards

- Use clear, concise language
- Include code examples
- Add diagrams where helpful
- Keep it up-to-date
- Link related documentation

## Testing

### Types of Tests

1. **Unit Tests** - Test individual functions
2. **Integration Tests** - Test component interactions
3. **End-to-End Tests** - Test complete workflows
4. **Visual Tests** - Test UI rendering

### Writing Tests

```javascript
// Example unit test
describe('filterModelsByTag', () => {
  it('should filter models by tag', () => {
    const models = [
      { tags: ['Pistols', 'Glock'] },
      { tags: ['Rifles', 'AR-15'] }
    ];
    
    const result = filterModelsByTag(models, 'Glock');
    
    expect(result).toHaveLength(1);
    expect(result[0].tags).toContain('Glock');
  });
});
```

### Running Tests

```bash
npm test
npm run test:watch
npm run test:coverage
```

## Review Process

### Pull Request Review

All PRs require:
1. Automated tests passing
2. Code review from maintainer
3. Documentation updates
4. No merge conflicts

### Review Checklist

Reviewers will check:
- [ ] Code follows style guidelines
- [ ] Tests are included and passing
- [ ] Documentation is updated
- [ ] No security vulnerabilities
- [ ] Performance considerations
- [ ] Accessibility compliance
- [ ] Mobile responsiveness

### Addressing Feedback

- Respond to all review comments
- Make requested changes
- Push updates to the same branch
- Request re-review when ready

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Credited in release notes
- Mentioned in project documentation

## Questions?

- Check existing issues and discussions
- Ask in pull request comments
- Contact maintainers
- Join community chat (when available)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (see LICENSE file).

---

Thank you for contributing to RenderOSArms! 🎉
