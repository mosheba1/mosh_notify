RegisterNetEvent("mosh_notify:notify")
AddEventHandler("mosh_notify:notify", function(title, description, theme, type, duration, iconUrl)
	SendNUIMessage({
		action = "notify",
		title = title,
		description = description,
		theme = theme,
		type = type,
		duration = duration,
		iconUrl = iconUrl,
	})
end)

RegisterNetEvent("mosh_notify:MoshDrop")
AddEventHandler("mosh_notify:MoshDrop", function()
	SendNUIMessage({
		action = "MoshDrop"
	})
end)
