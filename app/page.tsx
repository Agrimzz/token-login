"use client"

import {
  TextInput,
  Button,
  Group,
  Box,
  Paper,
  Image,
  Text,
  PasswordInput,
  Flex,
  Title,
} from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import { showNotification } from "@mantine/notifications"
import { Envelope } from "@phosphor-icons/react"
import { z } from "zod"

export default function Home() {
  const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters" })
      .regex(/[A-Z]/, {
        message: "Password should contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password should contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password should contain at least one digit" })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password should contain at least one special character",
      }),
  })

  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: zodResolver(schema),
  })
  return (
    <>
      <Paper w="100vw" h="100vh" bg="white" style={{ display: "flex" }}>
        <Flex flex={1} direction={{ base: "column-reverse", sm: "row" }}>
          <Title
            order={2}
            style={{ position: "absolute", top: 50, left: 50 }}
            visibleFrom="sm"
          >
            Manabiya Nepal
          </Title>
          <Box
            flex={{ base: 2, sm: 1 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Flex direction="column">
              <Text fz={40} w={{ base: "300", md: 400, lg: 500 }}>
                Welcome!
              </Text>
              <Text fz={20} c="#bbb">
                Please enter your details
              </Text>
              <form
                onSubmit={form.onSubmit((values) => {
                  console.log(values)
                  form.reset()
                  showNotification({
                    title: "Success",
                    message: "Login Success",
                  })
                })}
              >
                <Box w="100%" style={{ textAlign: "left" }} mt={50}>
                  <TextInput
                    mt="md"
                    label="Email"
                    placeholder="Enter your email"
                    rightSection={<Envelope />}
                    {...form.getInputProps("email")}
                  />
                  <PasswordInput
                    mt="md"
                    label="Password"
                    placeholder="Enter your passoword"
                    {...form.getInputProps("password")}
                  />

                  <Group justify="center" mt="xl" w="100%">
                    <Button
                      bg="#09185a"
                      c="white"
                      w="100%"
                      size="md"
                      type="submit"
                    >
                      Sign In
                    </Button>
                    <Text fz={14} c="#09185a">
                      Forgot Password?
                    </Text>
                  </Group>
                </Box>
              </form>
            </Flex>
          </Box>
          <Box
            flex={1}
            bg="#f3f4f8"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Image
              src="https://cdn.discordapp.com/attachments/1178296736691789854/1186505996659597412/Frame_16.png?ex=65efc7d1&is=65dd52d1&hm=c8cf252a1da66510f09d7eecea788121b3d06c2f74abcceea1bc00982136c5f7&"
              alt="Logo"
              w={{ base: 200, sm: 300, lg: 400 }}
            ></Image>
            <Title order={2} hiddenFrom="sm">
              Manabiya Nepal
            </Title>
          </Box>
        </Flex>
      </Paper>
    </>
  )
}
