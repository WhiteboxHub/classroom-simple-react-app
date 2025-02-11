pipeline {
    agent any
    environment {
        EC2_USER = 'ec2-user' 
        EC2_HOST = '3.88.223.101' 
        EC2_DIR = '/home/ec2-user/react-app' 
    }
    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the latest code from your GitHub repository
                git branch: 'main', url: 'https://github.com/WhiteboxHub/classroom-simple-react-app.git'
            }
        }
        // Issue with docker image need to resolve
        stage('Build Docker Image') {
            steps {
                // Build the Docker image
               sh '''
                      docker build --no-cache -t react-app -f simple-react-app/Dockerfile 
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
