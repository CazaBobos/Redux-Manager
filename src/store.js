import { createStore } from "redux";

const initalState = {
    players: [
        {id: 1,  name: "Genzo Wakabayashi", photo: "/Img/Genzo_Wakabayashi.jpg"},
        {id: 2,  name: "Hikaru Matsuyama",  photo: "/Img/Hikaru_Matsuyama.jpg"},
        {id: 3,  name: "Jun Misugi",        photo: "/Img/Jun_Misugi.jpg"},
        {id: 4,  name: "Kojiro Hyuga",      photo: "/Img/Kojiro_Hyuga.jpg"},
        {id: 5,  name: "Ricardo Espadas",   photo: "/Img/Ricardo_Espadas.jpg"},
        {id: 6,  name: "Ryo Ishikazi",      photo: "/Img/Ryo_Ishikazi.jpg"},
        {id: 7,  name: "Shingo Aoi",        photo: "/Img/Shingo_Aoi.jpg"},
        {id: 8,  name: "Shingo Takasugi",   photo: "/Img/Shingo_Takasugi.jpg"},
        {id: 9,  name: "Shun Nitta",        photo: "/Img/Shun_Nitta.jpg"},
        {id: 10, name: "Taro Misaki",       photo: "/Img/Taro_Misaki.jpg"},
        {id: 11, name: "Tsubasa Ozora",     photo: "/Img/Tsubasa_Ozora.jpg"}
    ],
    startings: [],
    substitutes: []
};
const trainerReducer = (state = initalState, action) => {
    if(action.type === "Add_Starting"){
        return {
            ...state,
            startings: state.startings.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id)
        }
    }
    if(action.type === "Add_Substitute"){
        return {
            ...state,
            substitutes: state.substitutes.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id)
        }
    }
    if(action.type === "Remove_Starting"){
        return {
            ...state,
            startings: state.startings.filter(p => p.id !== action.player.id),
            players: state.players.concat(action.player)
        }       
    }
    if(action.type === "Remove_Substitute"){
        return {
            ...state,
            substitutes: state.substitutes.filter(p => p.id !== action.player.id),
            players: state.players.concat(action.player)
        }       
    }
    return state;
}

export default createStore(trainerReducer);