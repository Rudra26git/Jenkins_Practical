pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-products-api .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop products-api || true'
                sh 'docker rm products-api || true'
                sh 'docker run -d --name products-api -p 3000:3000 node-products-api'
            }
        }
    }
}
