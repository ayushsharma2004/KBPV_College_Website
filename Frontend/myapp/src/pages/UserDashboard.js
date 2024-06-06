import React from 'react'
import { OpenAI } from 'openai';

const UserDashboard = () => {
    const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });
    // console.log(openai);
    var completion = 1;
    async function main() {
        completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: "Hii i am aryan" }
            ],
            model: "gpt-3.5-turbo",
        });

        console.log(completion.choices[0]);
    }
    main();
    return (
        <div>UserDashboard</div>
    )
}

export default UserDashboard