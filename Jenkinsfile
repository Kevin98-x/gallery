pipeline {
    agent any
    environment {
        SLACK_WEBHOOK_URL = credentials('https://hooks.slack.com/services/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') 
        RENDER_URL = 'https://gallery-03ft.onrender.com'      
    }
    stages {
        stage('Setup Environment') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build and Deploy') {
            steps {
                sh 'node server.js'
            }
        }
    }
    post {
        success {
            script {
                def message = """
                :white_check_mark: *Build Successful!*
                - *Build ID*: ${env.BUILD_ID}
                - *Render URL*: ${env.RENDER_URL}
                """
                slackSend(channel: '#YourFirstName_IP1', color: 'good', message: message, webhookUrl: env.SLACK_WEBHOOK_URL)
            }
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
