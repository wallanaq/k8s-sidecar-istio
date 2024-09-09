# Project: Exploring Istio as a Sidecar for Authentication using JWKS

This project is designed to test and explore the capabilities of Istio as a sidecar proxy for handling authentication within a Kubernetes cluster. The main focus is to integrate JWT (JSON Web Token) authentication and validate tokens using JWKS (JSON Web Key Set). By leveraging Istio's powerful features, such as RequestAuthentication and AuthorizationPolicy, the lab demonstrates how to manage secure API access based on bearer tokens.

The setup includes configuring the Istio sidecar to intercept HTTP requests to a microservice, validate JWT tokens, and enforce authorization rules. Specific endpoints are configured to allow public access (such as /info, /health, and /metrics), while others are restricted and require a valid token for access. The token validation is performed using a JWKS URI from a Keycloak instance, which acts as the identity provider.

Key aspects tested in this lab include:

- JWT validation and claim extraction via RequestAuthentication.
- Conditional access controls using AuthorizationPolicy for protected and open endpoints.
- Using Istio’s Envoy sidecar to inject and enforce security without modifying the microservices.
- The lab also explores advanced customizations, such as using Envoy Lua filters to modify responses and handle authorization logic at the proxy layer.
