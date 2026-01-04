export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
  const {message} = req.body;
  if(!message) return res.status(400).json({error:"No message provided"});

  const BOT_TOKEN="8017748723:AAHrg87STB0v30EXJG_ydHUBtH29yv1uc18";
  const CHAT_ID="8182066540";

  try{
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({chat_id:CHAT_ID,text:message})
    });
    const data = await response.json();
    if(!data.ok) throw new Error(data.description);
    res.status(200).json({status:"Message sent"});
  } catch(err){
    console.error(err);
    res.status(500).json({error:err.message});
  }
}
