"use client";

import { Chat, AccessTime, AutoAwesome } from "@mui/icons-material";
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
const HomeContent = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          background: " #121212",
          color: "white",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Experience the magic of ChatGenie
          </Typography>
          <Typography variant="h5" component="p" sx={{ marginBottom: "40px" }}>
            Your intelligent assistant, always ready to help you 24/7.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0ebab1",
              color: "white",
              "&:hover": {
                backgroundColor: "#222831",
              },
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>
      <Container sx={{ marginTop: "60px", textAlign: "center" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "500",
            marginTop: "200px",
            color: "black",
          }}
        >
          "AI enhances human potential, sparking unprecedented creativity"
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ marginTop: "50px", color: "#black", marginBottom: "200px" }}
        >
          — Satya Nadella
        </Typography>
      </Container>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          background: " #121212",
          color: "white",
          marginBottom: "60px",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              marginBottom: "60px",
              textAlign: "center",
              marginTop: "60px",
            }}
          >
            Key Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  backgroundColor: "#161616",
                  color: "white",
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "20px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  <Chat
                    sx={{
                      fontSize: 50,
                      color: "white",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  />
                  <Typography variant="h6" component="h3">
                    Natural Language Processing
                  </Typography>
                  <Typography variant="body2" color="white">
                    Understands and processes human language efficiently.
                    Delivers context-aware responses in real-time.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  backgroundColor: "#161616",
                  color: "white",
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "20px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  <AccessTime
                    sx={{
                      fontSize: 80,
                      color: "white",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  />
                  <Typography variant="h6" component="h3">
                    24/7 Availability
                  </Typography>
                  <Typography variant="body2" color="white">
                    Always available to assist you anytime. No downtime,
                    ensuring continuous support.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  backgroundColor: "#161616",
                  color: "white",
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "20px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  <AutoAwesome
                    sx={{
                      fontSize: 80,
                      color: "white",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  />
                  <Typography variant="h6" component="h3">
                    Adaptive Learning
                  </Typography>
                  <Typography variant="body2" color="white">
                    AI learns and evolves based on user interactions.
                    Continuously improves responses and accuracy over time.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container
        sx={{ marginTop: "60px", textAlign: "center", marginBottom: "200px" }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "500",
            marginTop: "200px",
            color: "black",
            marginBottom: "20px",
          }}
        >
          Want to explore ChatGenie?
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            marginTop: "20px",
            marginBottom: "50px",
            color: "white",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
            color: "black",
          }}
        >
          Discover how ChatGenie can revolutionize your daily tasks with its
          intelligent features. Seamlessly interact with AI that understands
          you, provides 24/7 support, and learns to serve you better each day.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0ebab1",
            marginTop: "30px",
            color: "white",
            fontSize: "20px",
            padding: "5px 30px 5px 30px",

            "&:hover": {
              backgroundColor: "#222831",
            },
          }}
        >
          Try Now
        </Button>
      </Container>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          background: " #121212",
          color: "white",
          marginBottom: "60px",
        }}
      >
        <Container sx={{ marginTop: "60px", textAlign: "center" }}>
          <Typography variant="h2">Collaborators</Typography>
          <Typography
            marginBottom="60px"
            variant="h6"
            sx={{ textAlign: "center" }}
          >
            Of this project
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  backgroundColor: "#161616",
                  color: "white",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "20px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  <Avatar
                    alt="Contributor 1"
                    src="/ddp.jpg"
                    sx={{ width: 80, height: 80, margin: "0 auto 10px" }}
                  />
                  <Typography variant="h6" component="h3">
                    Mehak
                  </Typography>
                  <Typography variant="body2" component="p">
                    Frontend Developer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  backgroundColor: "#161616",
                  color: "white",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "20px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  <Avatar
                    alt="Contributor 1"
                    src="/"
                    sx={{ width: 80, height: 80, margin: "0 auto 10px" }}
                  />
                  <Typography variant="h6" component="h3">
                    Zaryab Khan
                  </Typography>
                  <Typography variant="body2" component="p">
                    Backend Developer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  backgroundColor: "#161616",
                  color: "white",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "20px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  <Avatar
                    alt="Contributor 1"
                    src="/"
                    sx={{ width: 80, height: 80, margin: "0 auto 10px" }}
                  />
                  <Typography variant="h6" component="h3">
                    Rafia Shan
                  </Typography>
                  <Typography variant="body2" component="p">
                    Frontend Developer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Typography
        variant="h6"
        component="p"
        textAlign="center"
        marginBottom="20px"
      >
        This project is created under the HeadstarterAI fellowship
      </Typography>
    </>
  );
};

export default HomeContent;
