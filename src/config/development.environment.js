export default {

  rabbitmq: {
    url: '#your-development-rabbitmq'
  },

  google: {
    projectId: "#your-google-cloud-project-id",
    credentials: {
      type: "service_account",
      project_id: "#your-google-cloud-project-id",
      private_key_id: "#your-google-cloud-private-key-id",
      private_key: "#your-google-cloud-private-key",
      client_email: "#your-google-cloud-client-email",
      client_id: "#your-google-cloud-client-id",
      auth_uri: "#your-google-cloud-auth-uri",
      token_uri: "#your-google-cloud-token-uri",
      auth_provider_x509_cert_url: "#your-google-cloud-certs",
      client_x509_cert_url: "#your-google-cloud-cert-url",
    }
  }
};
