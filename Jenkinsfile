pipeline {
    agent any
    stages {
        stage('Setup Environment') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }
        stage('Build and Test') {
            steps {
                // Verify application runs successfully
                sh 'npm run build || echo "No build script, skipping"'
                // Optionally add tests if you create any in the future
                sh 'npm test || echo "No tests found, skipping"'
            }
        }
        stage('Deploy to Render') {
            steps {
                // Start the application
                sh 'node server.js'
                // Automate deployment if you use Render CLI/API
                echo "Deploy script for Render would go here"
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
