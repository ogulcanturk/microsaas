// Microsaas Package: A Basic Implementation

// Step 1: Dependencies
const fs = require('fs');
const path = require('path');

// Step 2: Constants for Directory and File Templates
const INSTRUCTIONS_DIR = 'instructions';
const FILE_TEMPLATES = {
  'code-standards.md': `# Code Standards\n\n## Naming Conventions\n- Variables: camelCase\n- Functions: camelCase\n- Classes: PascalCase\n\n## Indentation\n- Use 2 spaces\n\n## Line Length\n- Max: 100 characters\n`,
  'ai-guidelines.md': `# AI Guidelines\n\n## Model Selection\n- Preferred: GPT-4\n\n## Data Sources\n- Internal: Custom datasets\n- External: OpenAPI\n\n## Output Format\n- JSON\n`,
  'workflow.md': `# Workflow\n\n## Branch Strategy\n- main: Production\n- dev: Development\n- feature/*: Feature branches\n\n## Commit Messages\n- Format: \"[Type]: Description\"\n\n## CI/CD\n- Runs tests and deploys to staging\n`,
  'api-versioning.md': `# API Versioning\n\n## Version Format\n- Semantic Versioning: v<MAJOR>.<MINOR>.<PATCH>\n\n## Compatibility\n- Backward compatible changes only in minor versions\n`,
  'deployment.md': `# Deployment\n\n## Environments\n- Staging\n- Production\n\n## Rollback\n- Use previous stable version\n`,
  'troubleshooting.md': `# Troubleshooting\n\n## Common Issues\n- Error: \"Module not found\"\n  - Solution: Run npm install\n\n- Error: \"Permission denied\"\n  - Solution: Check file permissions\n`
};

// Step 3: Helper Functions
function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Directory created: ${dirPath}`);
  } else {
    console.log(`Directory already exists: ${dirPath}`);
  }
}

function createFile(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`File created: ${filePath}`);
  } else {
    console.log(`File already exists: ${filePath}`);
  }
}

// Step 4: Main Function
function initializeMicrosaas() {
  console.log('Initializing project with instructions...');

  // Create instructions directory
  createDirectory(INSTRUCTIONS_DIR);

  // Create files in instructions directory
  for (const [fileName, content] of Object.entries(FILE_TEMPLATES)) {
    const filePath = path.join(INSTRUCTIONS_DIR, fileName);
    createFile(filePath, content);
  }

  console.log('Project initialized successfully!');
}

// Export the function for external usage
module.exports = {
  initializeMicrosaas
};
