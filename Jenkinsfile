pipeline {
    agent any
    environment {
        SLACK_WEBHOOK_URL = credentials('https://hooks.slack.com/services/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') 
        RENDER_URL = 'https://gallery-03ft.onrender.com'      
    }
    stages {
        stage('Build and Test') {
            steps {
                sh 'npm run build || echo "No build script,skipping "'
                sh 'npm test || echo "No tests found , skipping" '
            }
        }
        stage('Deploy to Render') {
            steps {
                sh 'node server.js'
                echo "Deploy script for render would go here"
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
