<script>
	import { network } from "@sveu/browser"
	import { strftime } from "@sveu/shared"

	const {
		online,
		offline_at,
		online_at,
		downlink,
		downlink_max,
		effective_type,
		rtt,
		save_data,
		type,
	} = network()
</script>

<h4>online: {$online}</h4>
<h4>online_at: {$online_at ? strftime($online_at, "%c") : ""}</h4>
<h4>offline_at: {$offline_at ? strftime($offline_at, "%c") : ""}</h4>
<h4>downlink: {$downlink}</h4>
<h4>downlink max: {$downlink_max}</h4>
<h4>effective_type: {$effective_type}</h4>
<h4>rtt: {$rtt}</h4>
<h4>save_data: {$save_data}</h4>
<h4>type: {$type}</h4>
