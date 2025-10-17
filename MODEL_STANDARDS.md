# Model Standards & Quality Guidelines

## Overview

This document defines the standards for 3D models in the RenderOSArms repository to ensure quality, safety, and usability.

## Quality Scoring System

Models are scored on a 0-100 scale based on:

- **Documentation Quality** (30 points)
- **File Completeness** (25 points)
- **Visual Quality** (20 points)
- **Technical Accuracy** (15 points)
- **Safety & Legal Compliance** (10 points)

### Grade Scale

- **A (90-100):** Exceptional quality, complete documentation
- **B (80-89):** High quality, minor improvements needed
- **C (70-79):** Good quality, some improvements recommended
- **D (60-69):** Acceptable quality, significant improvements needed
- **F (0-59):** Below standard, major improvements required

## Directory Structure

### Required Structure

```
Model_Name-Author/
├── README.md                 # REQUIRED
├── STL/                      # REQUIRED
│   ├── part1.stl
│   ├── part2.stl
│   └── ...
└── Renders/                  # REQUIRED
    ├── view1.png
    ├── view2.jpg
    └── ...
```

### Recommended Structure

```
Model_Name-Author/
├── README.md
├── STL/
│   └── *.stl
├── STEP/                     # Recommended
│   └── *.step
├── Renders/                  # 3+ high-quality images
│   ├── assembly.png
│   ├── exploded.png
│   ├── detail1.jpg
│   └── detail2.jpg
├── Spec_Sheets/              # Optional but valuable
│   ├── dimensions.pdf
│   └── assembly_guide.pdf
└── Source/                   # Optional CAD source files
    └── *.sldprt
```

## README.md Requirements

### Required Sections

#### 1. Title and Description

```markdown
# Model Name v1.0

Brief description of what this model is and its primary purpose.
```

#### 2. Specifications

```markdown
## Specifications

- **Type:** [Pistol/Rifle/Accessory/etc.]
- **Caliber:** [9mm/5.56/.22LR/etc.]
- **Version:** [1.0]
- **Author:** [Designer name/handle]
- **License:** [License type]
- **Date:** [YYYY-MM-DD]
```

#### 3. Parts List

```markdown
## Parts List

### Printed Parts
1. Lower Receiver - 1x - PLA+/Nylon - 100% infill
2. Upper Receiver - 1x - PLA+/Nylon - 100% infill
3. Trigger Guard - 1x - PLA+ - 50% infill

### Hardware Required
- M3 x 10mm screws - 6x
- M3 nuts - 6x
- Springs: [specifications]
- Pins: [specifications]
```

#### 4. Print Settings

```markdown
## Print Settings

### Recommended Settings
- **Material:** PLA+, Nylon, or PETG
- **Layer Height:** 0.2mm
- **Infill:** 100% for structural parts, 50% for accessories
- **Supports:** Required for overhangs > 45°
- **Orientation:** [Specific orientation notes]
- **Perimeters:** 4-5 walls minimum

### Critical Notes
- [Any part-specific requirements]
- [Post-processing requirements]
```

#### 5. Assembly Instructions

```markdown
## Assembly Instructions

### Step 1: [First major step]
Detailed instructions with measurements and torque specifications.

### Step 2: [Second step]
[Continue with clear, numbered steps]

### Tools Required
- [List all tools needed]
```

#### 6. Safety Warnings

```markdown
## ⚠️ Safety Warnings

- **IMPORTANT:** This design is for educational purposes only
- Always follow proper firearms safety rules
- Wear appropriate safety equipment
- Test fire in a safe, controlled environment
- Inspect all parts before assembly
- [Additional specific warnings]
```

#### 7. Legal Compliance

```markdown
## Legal Notice

- Check local, state, and federal laws before building
- Some configurations may require licenses or permits
- Manufacturing certain items may be restricted in your jurisdiction
- This design may fall under NFA regulations
- The designer and repository maintainers are not responsible for misuse

**YOU are responsible for knowing and following all applicable laws.**
```

### Recommended Sections

#### Version History

```markdown
## Version History

### v1.0 (2025-01-15)
- Initial release
- [List changes]

### v0.9 (2024-12-01)
- Beta release
- [List changes]
```

#### Testing Notes

```markdown
## Testing & Results

- Rounds fired: [number]
- Failures: [number and type]
- Notes: [observations]
- Durability: [assessment]
```

#### Known Issues

```markdown
## Known Issues

1. [Issue description and workaround]
2. [Issue description and status]
```

#### Credits

```markdown
## Credits

Based on/inspired by: [original design if applicable]
Contributors: [list contributors]
Special thanks: [acknowledgments]
```

## 3D Model File Standards

### STL Files

**Requirements:**
- Binary format (preferred for size)
- Manifold (watertight) geometry
- No self-intersections
- Correct units (millimeters)
- Proper orientation (Z-up preferred)
- Reasonable polygon count (balance quality vs. file size)

**Best Practices:**
- Export at appropriate resolution
- Verify with mesh analysis tools
- Include both single-part and assembly files
- Name files descriptively: `lower_receiver_v1.stl`

### STEP Files

**Benefits:**
- Parametric information preserved
- Better for modifications
- Industry standard
- Higher precision

**Requirements:**
- STEP AP214 or AP242 format
- Include assembly constraints if applicable
- Verify import in multiple CAD programs

### File Naming

```
# Good examples:
frame_main_v1.0.stl
barrel_assembly.step
trigger_guard_left.stl

# Bad examples:
part1.stl
final_FINAL_v2_revised.stl
untitled.stl
```

## Render Image Standards

### Minimum Requirements

- **Quantity:** At least 3 high-quality images
- **Resolution:** Minimum 1920x1080px
- **Format:** PNG or JPEG
- **File Size:** Not less than 50KB per image

### Recommended Views

1. **Isometric/3/4 view** - Shows overall design
2. **Exploded view** - Shows all parts separated
3. **Assembly view** - Shows fully assembled
4. **Detail views** - Shows critical features
5. **In-use/context** - Shows scale and application

### Image Quality Guidelines

- **Lighting:** Well-lit, no harsh shadows
- **Background:** Clean, contrasting background
- **Focus:** Sharp, clear details
- **Context:** Include scale references when helpful
- **Watermark:** Optional author attribution

### Example Render Setup

```
Camera: Perspective, 50mm focal length
Lighting: 3-point lighting (key, fill, rim)
Background: Neutral gray or white
Anti-aliasing: Enabled
Shadows: Soft shadows enabled
Material: Appropriate to final use (plastic, metal)
```

## Documentation Best Practices

### Writing Style

- **Clear and Concise** - Use simple, direct language
- **Structured** - Use headings, lists, and tables
- **Specific** - Include measurements, not just "about X"
- **Complete** - Don't assume prior knowledge
- **Accurate** - Verify all specifications

### Technical Accuracy

- Double-check all measurements
- Test assembly instructions
- Verify hardware specifications
- Include tolerances where critical
- Note any fit adjustments needed

### Visual Aids

- Include diagrams for complex assembly
- Use photos of actual prints when available
- Add callouts to highlight important features
- Include dimension drawings for critical parts

## Safety Standards

### Required Safety Information

1. **Material Safety**
   - Approved materials for firearm use
   - Temperature limitations
   - Chemical resistance
   - UV degradation warnings

2. **Structural Safety**
   - Proof load tested (if applicable)
   - Factor of safety calculations
   - Known failure modes
   - Inspection procedures

3. **Operational Safety**
   - Maximum pressures
   - Recommended ammunition
   - Inspection schedule
   - Wear indicators

### Safety Documentation

Models involving firearms must include:
- Proof testing procedures
- Failure mode analysis
- Material stress calculations
- Safety inspection checklist

## Legal Compliance

### Required Legal Information

1. **Jurisdiction Warnings**
   - Federal regulations (US: ATF, NFA)
   - State and local laws
   - International export restrictions
   - Age restrictions

2. **Licensing Requirements**
   - FFL requirements (if applicable)
   - NFA items and tax stamps
   - State-specific licenses
   - Manufacturer requirements

3. **Liability Disclaimers**
   - Educational use only
   - No warranty
   - Builder responsibility
   - Repository disclaimers

## Validation Process

### Automated Checks

Models are automatically validated for:
- Required files present
- README completeness
- Image quality
- File format compliance
- Directory structure

### Manual Review

Maintainers review:
- Technical accuracy
- Safety information adequacy
- Legal compliance
- Documentation quality
- Community feedback

### Quality Score

Run validation: `npm run validate [model-path]`

Results include:
- Overall score (0-100)
- Letter grade (A-F)
- Specific issues found
- Improvement recommendations

## Continuous Improvement

### Iterative Development

- Release early versions for feedback
- Document changes in version history
- Address known issues
- Incorporate user suggestions

### Community Feedback

- Respond to issue reports
- Update based on testing results
- Credit contributors
- Maintain open communication

## Model Submission Checklist

Before submitting a new model:

- [ ] All required files present
- [ ] README.md complete with all sections
- [ ] 3+ high-quality render images
- [ ] STL files are manifold and properly oriented
- [ ] Safety warnings included
- [ ] Legal compliance information included
- [ ] Assembly instructions tested
- [ ] Hardware list verified
- [ ] Print settings confirmed
- [ ] Validation script passes (score > 70)
- [ ] All files properly named
- [ ] Version number specified

## Resources

- **Validation Tool:** `npm run validate`
- **STL Repair:** [Netfabb, Microsoft 3D Builder]
- **Mesh Analysis:** [MeshLab, Blender]
- **Rendering:** [Blender, Fusion 360]
- **Documentation:** [Markdown Guide]

## Questions?

- Open an issue on GitHub
- Check the [CONTRIBUTING.md](./CONTRIBUTING.md) guide
- Join community discussions
- Contact maintainers

---

By following these standards, you ensure your contributions are valuable to the community and maintain the quality of the repository.

**Last Updated:** 2025-10-17
