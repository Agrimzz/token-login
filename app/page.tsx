import { TextInput, Button, Group, Box } from "@mantine/core"

export default function Home() {
  return (
    <>
      <form>
        <Box maw={340} mx="auto">
          <TextInput label="Name" placeholder="Name" />
          <TextInput mt="md" label="Email" placeholder="Email" />

          <Group justify="center" mt="xl">
            <Button>Submit</Button>
          </Group>
        </Box>
      </form>
    </>
  )
}
