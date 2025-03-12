
const {Configuration,OpenAIApi} = require('openai')

const confi = new Configuration({
   apiKey:process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(confi);

const generateImage = async(req,res)=>{
   const {prompt,size}=req.body
   const imgSize=size==='small'?"256x256":size==='medium'?"512x512":"1024x1024"
   console.log(prompt,imgSize)

  try {
   const response=await openai.createImage({
      prompt:prompt,
      n:1,
      size:imgSize,
   })

   url=response.data.data[0].url;
   res.status(200).json({
     data:url,
   })
  } catch (error) {
    console.log(error)
  }
}



//Text Completion

const generateText= async(req,res)=>{
   try {
      const response=await openai.createCompletion({
         model:"text-davinci-003",
         prompt:req.body.text,
         max_tokens:2048,
         temperature:0.9,
      });
      let text=response.data.choices[0].text
      res.status(200).json({
          data:text,
      })
      console.log(response.data.choices[0].text);
   } catch (error) {
      console.log(error);
   }


}

module.exports = {generateImage,generateText}