<script>
    import {sleep} from "@sveu/shared"

    let text = "wake up"

    async function update_text(){
        text = "sleep...."
        await sleep(2)
        text = "wake up"
    }
</script>

<div class="flex flex-col text-center mt-20 mx-20">
<h1>{text}</h1>

<button class="p-3 text-white bg-green-500 mt-9" on:click="{() => update_text()}">Sleep</button>
</div>