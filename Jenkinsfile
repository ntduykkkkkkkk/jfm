pipeline {
    agent docker
    options {
        // Keep the 10 most recent builds
        buildDiscarder(logRotator(numToKeepStr:'10'))
    }
    stages {
        stage('Checkout') {
            agent { label 'docker'}
            steps {
                git url: 'https://gitlab.com/nthanhduy/jfm.git', branch: 'master', credentialsId: 'jenkins-ssh-key'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}