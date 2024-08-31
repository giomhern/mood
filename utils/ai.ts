import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import z from "zod"

const schema = z.object({
  mood: z.string().describe("The mood of the person who wrote the entry."),
  summary: z.string().describe("A 2-3 sentence summary of the entry."),
  subject: z.string().describe("The subject of the entry."),
  negative: z
    .boolean()
    .describe(
      "Is the entry negative? (i.e does it contain negative emotions?)."
    ),
  color: z
    .string()
    .describe(
      "A hexidecimal color code that represents the mood of the entry. Example #0101fe for blue representing happiness."
    ),
})

export const analyze = async (entry: any) => {

  const model = new ChatGoogleGenerativeAI({
    temperature: 0,
    model: "gemini-1.0-pro",
  })

  const structuredModel = model.withStructuredOutput(schema)

  const res = await structuredModel.invoke(
    `Analyze the following journal entry. Make sure to make the summary 2-3 sentences in length only. \n${entry}`
  );

  console.log(res)
  return res
}
