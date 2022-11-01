import styled from 'styled-components';
import Themes from '../ThemeColors/Theme';


export const SplashCont = styled.div`
    position:absolute;
    margin:0;
    padding:0;
    box-sizing:border-box;
    width:${window.innerWidth}px;
    height:100%;
    z-index:100;
    display:flex;
    justify-content:center;
    align-items:center;
    background:white;

    .splash{
        width:18em;
        height:18em;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-radius:9em;
        .text{
            color:${Themes.main};
            letter-spacing:2em;
            font-weight:bolder;
            padding-left:2em;
        }
        .motto{
            margin:1em;
            color:${Themes.purpish};
            font-weight:bolder;
            letter-spacing:2px;
            text-align:center;
        }
    }
`

export const StreakLogo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:0.5em;
    width:9em;
    padding:1em;

    .mobile{
        height:12em;
        width:100%;
        padding:1em;
        background:${Themes.purpish};
        border-radius:1.5em;
        display:flex;
        flex-direction:column;
        justify-content:flex-end;
        align-items:center;
        gap:3em;
        .logo{
            width:4em;
            height:4em;
        }
        .logo img{
            width:100%;
            height:100%;
        }
        .streakBtn{
            width:1.5em;
            height:1.5em;
            background:white;
            border-radius:0.75em;
        }
    }
    .base{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:0.5em;
        .line1{
            width:100%;
            padding:0.1em;
            background:${Themes.gold};
            border-radius:0.2em;
        }
        .line2{
            width:80%;
            padding:0.1em;
            background:${Themes.gold};
            border-radius:0.2em;
        }
        .line3{
            width:60%;
            padding:0.1em;
            background:${Themes.gold};
            border-radius:0.2em;
        }
        .line4{
            width:30%;
            padding:0.1em;
            background:${Themes.gold};
            border-radius:0.2em;
        }
    }

`

export const Signin = styled.div`
    width:100%;

    .head{
        width:100%;
        padding:1em 2em 0em 2em;
        display:flex;
        justify-content:space-between;
        align-items:center;

        .brand{
            width:3em;
            height:3em;
        }
        .brand img{
            width:100%;
            height:100%;
        }
    }
    .pageStatus{
        display:flex;
        justify-content:center;
        align-items:center;
        color:${Themes.main};
        font-weight:bolder;
        width:100%;
        padding:2em 3em 0em 3em;

        .stat1, .stat2{
            width:50%;
            display:flex;
            justify-content:center;
            align-items:center;
            padding:0.5em;
            cursor:pointer;
        }
        .stat1:hover, .stat2:hover{
            background:${Themes.golden};
            color:${Themes.white};
            transition:.1s
        }
    }
    .streakCont{
        display:flex;
        justify-content:center;
        align-items:center;
        color:black;
        margin:1em;

        .streakBox{
            flex:0 1 30em;
            height:35em;
            display:flex;
            flex-direction:column;
            justify-content:flex-start;
            align-items:center;
            margin-top:2em;
            border-radius:1em;
            box-shadow:0px 6px 12px rgba(0,0,0,0.5);
            color:${Themes.main};

            .loader{
                width:100%;
                display:flex:
                justify-content:center;
                padding-left:0.5em;
                align-items:center;
            }
            .loader > .streakBar{
                width:50%;
                padding:0.2em;
                border-radius:5em;
                background:${Themes.main}
            }
            .streakIn{
                padding:1em;
                margin:3em 0em 2em 0em;
            }
            .streakForm{
                width:100%;
                padding:1em;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                gap:2em;
            }
            .streakForm #input{
                padding:1em;
                padding-left:2em;
                width:90%;
                border-radius:0.5em;
                border:2px solid ${Themes.main};
                outline:none;
            }
            .streakForm section{
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:1em;
                padding-left:2em;
                width:90%;
                border-radius:0.5em;
                border:2px solid ${Themes.main};
            }
            .streakForm section  #inputP{
                width:80%;
                outline:none;
                border: 1px solid white;
            }
            .streakForm section h4{
                cursor:pointer
            }
            .streakForm button{
                padding:1em;
                width:90%;
                border-radius:0.5em;
                margin:1em;
                font-weight:bolder;
                letter-spacing:2px
            }
            .streakForm > .enable{
                background:${Themes.golden};
                border:2px solid ${Themes.golden};
                color:${Themes.main};
                cursor:pointer;
            }
            .streakForm > .disable{
                border: 2px solid ${Themes.purpish};
                background: ${Themes.purpish};
                color:${Themes.white};
            }
            .streakForm > .valid{
                color:blue;
                font-weight:bolder;
            }
            .streakForm > .inValid{
                padding:0.5em;
                text-align:center;
                color:red;
                font-weight:bolder;
            }
        }
    }
`
