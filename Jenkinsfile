pipeline {
    agent any
    tools{
        NodeJS 'npm'
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Kevin98-x/gallery', branch: 'master' 
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'node server.js' 
            }
        }
    }
}
