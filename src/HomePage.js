import React from "react";
import "./HomePage.css";

const HomePage = () => {
  const year = new Date().getFullYear();
  return (
    <div className="main-wrapper">
      <div className="content-container">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="logo" style={{ width: "427px", minWidth: "427px" }} />
        </div>
        <div className="text">
          <p><b>Aspen Tree</b> delivers advanced IT solutions with deep expertise in:</p>
          <ul>
            <li><b>AWS Cloud Technology:</b> Proven experience architecting and automating solutions using AWS API Gateway, Lambda, Step Functions, DynamoDB, SQS, EventBridge, and Redis.</li>
            <li><b>AI Agentic & RAG Solutions:</b> Advanced expertise in Retrieval-Augmented Generation (RAG) using Bedrock Agent, Bedrock knowledge base, and OpenSearch Serverless. Delivered AI agent solutions leveraging Lambda function URLs, Strands SDK (Python), Bedrock models, AWS Guardrails, and server-side streaming to Panther API for both knowledge discovery and platform engineering.</li>
            <li><b>DevOps & CI/CD Automation:</b> Expert in GitHub Actions, reusable workflows, GitHub APIs, AWS CodeBuild, and code-level automation with AWS CDK (Python/TypeScript), Terraform, and Terragrunt.</li>
            <li><b>Integration & Serverless Design:</b> Extensive experience designing, building, and automating scalable serverless solutions for complex integrations, with deep expertise in Lambda and Lambda layers using Python 3.x, Java, and TypeScript.</li>
            <li><b>Modernizing Legacy Workloads:</b> Expertise in migrating legacy workloads (e.g. WSO2, BW, SSIS) to cloud-native solutions using AWS API Gateway and Lambda (this includes transitional hybrid integration solutions in order to deliver within project budget constraints).</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">
        &copy; 2014-{year}, Aspen Tree
      </div>
    </div>
  );
}

export default HomePage;
