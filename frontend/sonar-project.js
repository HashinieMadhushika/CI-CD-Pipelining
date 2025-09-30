
const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: 'YOUR_SONARQUBE_URL',
    token: 'YOUR_SONARQUBE_TOKEN',
    options: {
      'sonar.projectKey': 'YOUR_PROJECT_KEY',
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.inclusions': 'src/**', // Entry point of your code
      'sonar.test.inclusions': 'src/**/*.test.js,src/**/*.test.jsx,src/**/*.spec.js,src/**/*.spec.jsx',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml',
      'sonar.coverage.exclusions': 'src/index.js,src/setupTests.js,src/reportWebVitals.js,src/components/CreateTask.test.js,src/components/Signup.test.js'
    }
  },
  () => {}
);
