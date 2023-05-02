import { createContext } from "react";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
	const videosRecommended = [
		{
			id: "1",
			title: "Javascript - Maneiras de criar objetos - root #03",
			channel: "RocketSeat",
			duration: "38:02",
			views: "23 mil visualizações",
			date_published: "há 1 ano",
			photo_url:
				"https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactjs/3.0.2/1588456824702/Microsoft.VisualStudio.Services.Icons.Default",
			thumbnail:
				"https://i.ytimg.com/vi/X6klpqubyBw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC6CFZeDNKUxkihcJl4iJH4uu09Q",
			verified: false,
			watched: false,
		},
		{
			id: "2",
			title: "Live coding: Criando aplicação REACT do ZERO",
			channel: "Fernanda Kipper | Dev",
			duration: "2:18:51",
			views: "6,9 mil visualizações",
			date_published: "há 3 dias",
			photo_url:
				"https://yt3.googleusercontent.com/DoWrbNZb_gkgIKj8PGjrs1QphLm6k1fPWWAzKq9xzxLa3xw2mJ7EUdwNvl9dbycnaT7MwkJD=s900-c-k-c0x00ffffff-no-rj",
			thumbnail:
				"https://i.ytimg.com/vi/lq7b8uZULs4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBk7Lh6O8rQCg57kI35ZfoQqI0Lbw",
			verified: false,
			watched: false,
		},
		{
			id: "3",
			title: "CASIMIRO ESTÁ INDIGNADO COM O CARTOLA | Cortes do Casimito",
			channel: "Cortes do Casimito [OFICIAL]",
			duration: "5:35",
			views: "5,8 mil visualizações",
			date_published: "Há 1 hora",
			photo_url:
				"https://yt3.googleusercontent.com/ytc/AGIKgqMl7u4nv58D6zfEoRVZDfqIp4HZ5kc6adX_A22I=s900-c-k-c0x00ffffff-no-rj",
			thumbnail:
				"https://i.ytimg.com/vi/2iaWGjYhvdE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByrxAethMo1tPACeC3OaaeZinzFQ",
			verified: true,
			watched: false,
		},
		{
			id: "4",
			title: "10 Coisas IMPRESSIONANTES Que Encontrei na Internet!!",
			channel: "Felipe Deschamps",
			duration: "16:41",
			views: "101 mil visualizações",
			date_published: "Há 11 meses",
			photo_url:
				"https://media.licdn.com/dms/image/C5603AQGmr1EOhC1Gyw/profile-displayphoto-shrink_400_400/0/1613487379448?e=1687996800&v=beta&t=Z6Z-70Bz1D7Gy1k1z4QWx3F5A3pVi8rKpzAs5Q6NJtA",
			thumbnail:
				"https://i.ytimg.com/vi/m26jErLd5ds/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLaLlXDZ-G2CySCis18HLgZ-PbgQ",
			verified: true,
			watched: false,
		},
		{
			id: "5",
			title: "9 coisas INACREDITÁVEIS encontradas no FUNDO do MAR!!",
			channel: "Você Sabia ?",
			duration: "12:12",
			views: "6 mi de visualizações",
			date_published: "há 4 anos",
			photo_url:
				"https://yt3.googleusercontent.com/ytc/AGIKgqO1V4n5r4JhkdWU5GvAUc1Vo3uB1q3_ko_0zDO7Rg=s900-c-k-c0x00ffffff-no-rj",
			thumbnail:
				"https://i.ytimg.com/vi/R196Km88DzQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5l3AcjWuVkjpt9NZZ_LVEurBXqA",
			verified: true,
			watched: true,
		},
		{
			id: "6",
			title: "COMO GARANTIR NA ENTREVISTA (como Programador)",
			channel: "Lucas Montano",
			duration: "16:55",
			views: "49 mil visualizações",
			date_published: "há 2 anos",
			photo_url:
				"https://yt3.googleusercontent.com/z0Ccoolotr1Q4F2EaCIgaR4GWLAR_VCwP25QrTica_e9XV6x8-kuQx_qnqI1mnaOkYl6KkIL=s900-c-k-c0x00ffffff-no-rj",
			thumbnail:
				"https://i.ytimg.com/vi/P2y1n_NyJy0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjChdAQpGV_2Ao1QA6dqM1BDd6gw",
			verified: true,
			watched: true,
		},
		{
			id: "7",
			title: "O Último Vídeo Que Você Precisa Ver Sobre LÓGICA e RESOLUÇÃO DE PROBLEMAS",
			channel: "Programador Sagaz",
			duration: "08:01",
			views: "8,9 mil visualizações",
			date_published: "há 4 anos",
			photo_url:
				"https://yt3.googleusercontent.com/hVYS_V0aIwSWhuFAbDzjymXQ1_s8ivbFIEm_wFLQkMHr5R41WDiB4jyypT0AS25pT_Iww9pDE50=s176-c-k-c0x00ffffff-no-rj",
			thumbnail:
				"https://i.ytimg.com/vi/p1sGc4EHQtM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY0RZRV4ZGeRE7XAgTuvKU3dn_Bg",
			verified: false,
			watched: false,
		},
		{
			id: "8",
			title: "Como TESTAR formulários com React Hook Form e TDD - React.js",
			channel: "Dev Junior Alves",
			duration: "43:35",
			views: "15 visualizações",
			date_published: "há 1 dia",
			photo_url:
				"https://yt3.googleusercontent.com/wDvf0WcxEjEjUJ_RI-qP3SoxKdF4z3tw9SyfUcm4Kll7ewXpR4Oms8kNOLsRxMvTRocC2nSJZiQ=s176-c-k-c0x00ffffff-no-rj",
			thumbnail:
				"https://i.ytimg.com/vi/awUE9p5ITQA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCPveBl6N8LCrYpTWeSU9msDr9yw",
			verified: false,
			watched: false,
		},
		{
			id: "9",
			title: "Configurando Jest + React Testing Library no Vite #Dia23",
			channel: "Front Beginners",
			duration: "18:44",
			views: "1,3 mil visualizações",
			date_published: "há 3 meses",
			photo_url: "https://yt3.googleusercontent.com/oe66EhKcgq17C06jpmUXIVQp1v36wMECSpL3towretQi9c6XywFxkSKa8-D6D8dZF0BXC0zddA=s176-c-k-c0x00ffffff-no-rj",
			thumbnail:
				"https://i.ytimg.com/vi/HLgY_Cmqe14/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZvAheDx2agEeeGpZZXYIEH47voQ",
			verified: true,
			watched: true,
		},
	];

	const channelsSubscribed = [
		{
			name: "Cortes do Casimito",
			photo_url:
				"https://yt3.googleusercontent.com/ytc/AGIKgqMl7u4nv58D6zfEoRVZDfqIp4HZ5kc6adX_A22I=s900-c-k-c0x00ffffff-no-rj",
		},
		{
			name: "RocketSeat",
			photo_url:
				"https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactjs/3.0.2/1588456824702/Microsoft.VisualStudio.Services.Icons.Default",
		},
		{
			name: "Podpah",
			photo_url:
				"https://mir-s3-cdn-cf.behance.net/projects/404/0f0e3b107314367.Y3JvcCw4MDgsNjMyLDAsMA.png",
		},
		{
			name: "Matheus Battisti-..",
			photo_url:
				"https://img-b.udemycdn.com/user/200_H/30066438_fd8b_4.jpg",
		},
		{
			name: "MW Informática",
			photo_url:
				"https://i.ytimg.com/vi/6q3uOJo6iT8/maxresdefault.jpg",
		},
		{
			name: "Tteuw",
			photo_url:
				"https://static-cdn.jtvnw.net/jtv_user_pictures/2995cc5c-de83-4a97-aa80-950538dc6993-profile_image-300x300.png",
		},
		{
			name: "Orochinho",
			photo_url:
				"https://i.pinimg.com/736x/53/b2/0c/53b20c52e4cd1d65d29743b9817716d9.jpg",
		},
		{
			name: "Lil vinicinho",
			photo_url:
				"https://yt3.googleusercontent.com/j3KiWcKZJjLjE3SDfiCC7j4jcAA4W-3tHjjiTA2UlmXONoDgsyLyAwZ_tOQYFyYQ0MoW0oBwXnk=s900-c-k-c0x00ffffff-no-rj",
		},
		{
			name: "SerLiv",
			photo_url:
				"https://yt3.googleusercontent.com/sYTVAkymqVGjGMZjwIcZ9BhFXTy-oveVsR4UFiOpdkopcOvD0syjdH07XkJlttrAYUyGkTdrXw=s900-c-k-c0x00ffffff-no-rj",
		},
		{
			name: "DevMedia",
			photo_url:
				"https://production.listennotes.com/podcasts/devcast-seu-podcast-de-tecnologia-devmedia-q_vEPgkfomh-kgZneTUlP24.1400x1400.jpg",
		},
	];

	return (
		<ContextProvider.Provider
			value={{ videosRecommended, channelsSubscribed }}
		>
			{children}
		</ContextProvider.Provider>
	);
};
