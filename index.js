import express, { json } from "express"
import cors from "cors"


const app = express()

app.use(cors())
app.use(json())

app.get('/', (req, res)=>{
    const resp = {
        email:"sodiqarowolo02@gmail.com",
        current_datetime : new Date().toISOString(),
        github_url :"https://github.com/Terracons/HNG-BN01.git"
    }

    res.json(resp)

})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log('SERVER IS RUNING ON ', PORT);
})