pipeline {
    agent any
    environment {
        RENDER_URL = 'https://gallery-03ft.onrender.com' 
        SLACK_CHANNEL = '#kevin_ip1'
        SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'
        EMAIL_RECIPIENT = 'kevinmuthama8@gmail.com'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        stage('Deploy to Render') {
            steps {
                echo 'Deploying application to Render...'
                
                sh 'node server.js'
            }
        }
        stage('Notify Slack') {
            steps {
                echo 'Sending Slack notification...'
                slackSend channel: "${SLACK_CHANNEL}",
                          message: "Build ${env.BUILD_NUMBER} deployed successfully to ${env.RENDER_URL}",
                          color: 'good'
            }
        }
    }
    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        failure {
            mail to: "${EMAIL_RECIPIENT}",
                 subject: "Build ${env.BUILD_NUMBER} Failed on ${env.BRANCH_NAME}",
                 body: "The build failed for branch ${env.BRANCH_NAME}. Please check the Jenkins logs for details."
        }
    }
}
