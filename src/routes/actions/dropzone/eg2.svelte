<script lang="ts">
	import { dropzone } from "@sveu/actions"
	import type { DropzoneData } from "@sveu/actions"

	let over_dropzone = false

	let files_data: any[] = []

	function on_dropzone({ over_dropzone: hovered, files }: DropzoneData) {
		over_dropzone = hovered

		if (files) {
			files_data = files.map((file) => ({
				name: file.name,
				size: file.size,
				type: file.type,
				last_modified: file.lastModified,
			}))
		}
	}
</script>

<div class="flex text-center">
	<div class="h-auto w-full relative">
		<p>Drop files into dropZone</p>

		<div
			use:dropzone="{on_dropzone}"
			class="flex flex-col h-auto bg-gray-400/10 mt-6 w-full min-h-200px justify-center items-center">
			<div>is Over Drop Zone: {over_dropzone}</div>
			<div class="flex flex-wrap justify-center items-center">
				{#each files_data as file}
					<div class="flex flex-col justify-center items-center">
						<div>File Name: {file.name}</div>
						<div>File Size: {file.size}</div>
						<div>File Type: {file.type}</div>
						<div>
							File Last Modified: {new Intl.DateTimeFormat(
								"en-US"
							).format(file.last_modified)}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
