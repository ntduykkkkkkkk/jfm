pipeline {
    agent any
    stages {
        stage('HelloWorld') {
            agent {
                label 'docker'
            }
            steps {
                sh "docker build ."
            }
        }
        stage('test') {
            steps {
                echo "hello"
            }
        }
    }
}