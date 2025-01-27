pipeline {
    agent any
    environment {
        EC2_USER = 'ec2-user' // For Amazon Linux, default user is ec2-user
        EC2_HOST = '3.88.223.101' // Replace with your EC2 public IP
        EC2_DIR = '/home/ec2-user/react-app' // Desired directory on EC2
    }
    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the latest code from your GitHub repository
                git branch: 'main', url: 'https://github.com/WhiteboxHub/UI-Git-EC2.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                sh '''
                    docker build -t react-app .
                '''
            }
        }
        stage('Push Docker Image to EC2') {
            steps {
                // Save and transfer the Docker image to EC2
                sh '''
                    docker save react-app | gzip > react-app.tar.gz
                    scp react-app.tar.gz ${EC2_USER}@${EC2_HOST}:${EC2_DIR}
                '''
            }
        }
        stage('Deploy on EC2') {
            steps {
                // Load and run the Docker container on EC2
                sh '''
                    ssh ${EC2_USER}@${EC2_HOST} "
                        mkdir -p ${EC2_DIR};
                        docker load < ${EC2_DIR}/react-app.tar.gz;
                        docker stop react-container || true;
                        docker rm react-container || true;
                        docker run -d -p 3000:3000 --name react-container react-app
                    "
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
