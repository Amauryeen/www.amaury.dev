"use client";

import {
  Center,
  Box,
  Transition,
  Button,
  Title,
  Text,
  Divider,
  Stack,
} from "@mantine/core";
import { useState, useEffect } from "react";
import {
  IconBrandLinkedin,
  IconMail,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function HomePage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Center
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
        padding: "20px",
      }}
    >
      <Transition
        mounted={visible}
        transition="fade"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Box
            style={{
              ...styles,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "40px",
              borderRadius: "15px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid #ccc",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              width: "80%",
              maxWidth: "800px",
              flexWrap: "wrap",
            }}
          >
            <Box style={{ flex: 1, paddingRight: "20px", minWidth: "250px" }}>
              <Title order={1} style={{ marginBottom: "10px", color: "#333" }}>
                Amaury GROTARD
              </Title>
              <Text style={{ marginBottom: "20px", color: "#555" }}>
                Analyst Developer
              </Text>
              <Text style={{ marginBottom: "30px", color: "#777" }}>
                I am passionate in IT, recently graduated from a bachelor.
                <br />
                Check my social networks to know more about me!
              </Text>
            </Box>
            <Divider orientation="vertical" style={{ margin: "0 20px" }} />
            <Box style={{ flex: 1, paddingLeft: "20px", minWidth: "250px" }}>
              <Stack style={{ width: "100%" }}>
                <Button
                  variant="outline"
                  color="blue"
                  leftSection={<IconMail size={18} />}
                  component="a"
                  href="mailto:contact@amaury.dev"
                  style={{
                    borderColor: "#d44638",
                    color: "#d44638",
                    width: "100%",
                  }}
                >
                  Email
                </Button>
                <Button
                  variant="outline"
                  color="blue"
                  leftSection={<IconBrandLinkedin size={18} />}
                  component="a"
                  href="https://www.linkedin.com/in/amaury-grotard"
                  target="_blank"
                  style={{
                    borderColor: "#0077b5",
                    color: "#0077b5",
                    width: "100%",
                  }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  color="blue"
                  leftSection={<IconBrandGithub size={18} />}
                  component="a"
                  href="https://github.com/amauryeen"
                  target="_blank"
                  style={{ borderColor: "#333", color: "#333", width: "100%" }}
                >
                  GitHub
                </Button>
              </Stack>
            </Box>
          </Box>
        )}
      </Transition>
    </Center>
  );
}
