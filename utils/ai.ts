import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { StructuredOutputParser } from "@langchain/core/output_parsers"
import { ChatPromptTemplate } from "@langchain/core/prompts"; 
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

export const analyze = async (entry: string) => {
  const model = new ChatGoogleGenerativeAI({
    temperature: 0,
    model: "gemini-1.0-pro",
  })
  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      "Analyze the following journal entry. Follow the instructions and format your response to match the format instructions, no matter what! \n{format_instructions}\n{input}",
    ],
    ["human", "{input}"],
  ]); 


  const parser = StructuredOutputParser.fromZodSchema(schema);
  const formatInstructions = parser.getFormatInstructions()
  const chain = prompt.pipe(model)
  const res = await chain.invoke({
    format_instructions: formatInstructions, 
    input: entry, 
  })

  const parsedRes = await parser.parse(String(res.content))

  return parsedRes;
}
