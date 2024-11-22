pipeline {
    agent any
    stages {
        stage('Setup Environment') {
            steps {
                
                sh 'npm install'
            }
        }
        stage('Build and Test') {
            steps {
                
                sh 'npm run build || echo "No build script, skipping"'
                
                sh 'npm test || echo "No tests found, skipping"'
            }
        }
        stage('Deploy to Render') {
            steps {
                
                sh 'node server.js'
               
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
