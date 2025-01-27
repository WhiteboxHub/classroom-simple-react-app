pipeline {
    agent any
    environment {
        EC2_USER = 'ec2-user'  // For Amazon Linux, default user is ec2-user
        EC2_HOST = '3.88.223.101'  // Replace with your EC2 public IP
        EC2_DIR = '/home/ec2-user/react-app'  // Define your desired directory on EC2
    }
    // add stages
    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the latest code from your GitHub repository
                git branch: 'main', url: ''
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm if not already installed
                sh '''
                    curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
                    sudo yum install -y nodejs
                    npm install
                '''
            }
        }
        stage('Build React App') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }
        stage('Deploy to EC2') {
            steps {
                // Securely copy the build folder to EC2 and deploy it to Nginx
                sh '''
                    scp -r ./build ${EC2_USER}@${EC2_HOST}:${EC2_DIR}
                    ssh ${EC2_USER}@${EC2_HOST} "sudo cp -r ${EC2_DIR}/build/* /var/www/html"
                    sudo chown -R ec2-user:ec2-user /var/www/html
                    sudo systemctl restart nginx  // Restart Nginx to apply changes
                '''
            }
        }
    }
    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Deployment Failed!'
        }
    }
}
