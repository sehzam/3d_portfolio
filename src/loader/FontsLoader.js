export const fontFamilies = [
    "Aclonica-Regular",
    "Agdasima-Bold",
    "Agdasima-Regular",
    "Aldrich-Regular",
    "AlexBrush-Regular",
    "Amiri-BoldItalic",
    "Amiri-Bold",
    "Amiri-Italic",
    "Amiri-Regular",
    "Asap-Italic-VariableFont_wdth,wght",
    "Asap-VariableFont_wdth,wght",
    "Borel-Regular",
    "BrunoAceSC-Regular",
    "Calligraffitti-Regular",
    "Charm-Bold",
    "Charm-Regular",
    "Codystar-Light",
    "Codystar-Regular",
    "CoveredByYourGrace-Regular",
    "Damion-Regular",
    "DancingScript-VariableFont_wght",
    "DotGothic16-Regular",
    "Electrolize-Regular",
    "Exo2-Italic-VariableFont_wght",
    "Exo2-VariableFont_wght",
    "FreckleFace-Regular",
    "Frijole-Regular",
    "GamjaFlower-Regular",
    "GermaniaOne-Regular",
    "Gluten-VariableFont_slnt,wght",
    "Gotu-Regular",
    "GrenzeGotisch-VariableFont_wght",
    "Gurajada-Regular",
    "HiMelody-Regular",
    "IndieFlower-Regular",
    "Italianno-Regular",
    "JockeyOne-Regular",
    "Julee-Regular",
    "Jura-VariableFont_wght",
    "JustAnotherHand-Regular",
    "JustMeAgainDownHere-Regular",
    "Kalam-Bold",
    "Kalam-Light",
    "Kalam-Regular",
    "Kavivanar-Regular",
    "KoHo-Bold",
    "KoHo-Italic",
    "KoHo-Light",
    "KoHo-Medium",
    "LaBelleAurore-Regular",
    "Lato-Bold",
    "Lato-Light",
    "Lato-Regular",
    "LeagueScript-Regular",
    "LeckerliOne-Regular",
    "Lobster-Regular",
    "MajorMonoDisplay-Regular",
    "MarckScript-Regular",
    "MaShanZheng-Regular",
    "Merienda-VariableFont_wght",
    "Metal-Regular",
    "Mohave-Italic-VariableFont_wght",
    "Mohave-VariableFont_wght",
    "Montez-Regular",
    "Mooli-Regular",
    "MuseoModerno-Italic-VariableFont_wght",
    "MuseoModerno-VariableFont_wght",
    "NanumPenScript-Regular",
    "Norican-Regular",
    "NothingYouCouldDo-Regular",
    "NovaMono-Regular",
    "NovaRound-Regular",
    "Orbitron-VariableFont_wght",
    "Oswald-VariableFont_wght",
    "Pattaya-Regular",
    "PirataOne-Regular",
    "Poppins-Bold",
    "Poppins-Regular",
    "Poppins-Thin",
    "PortLligatSans-Regular",
    "Quantico-Bold",
    "Quantico-Italic",
    "Quantico-Regular",
    "Quintessential-Regular",
    "Qwigley-Regular",
    "Raleway-Italic-VariableFont_wght",
    "Raleway-VariableFont_wght",
    "Ranga-Bold",
    "Ranga-Regular",
    "Rasa-Italic-VariableFont_wght",
    "Rasa-VariableFont_wght",
    "Redressed-Regular",
    "ReggaeOne-Regular",
    "RobotoCondensed-Bold",
    "RobotoCondensed-Light",
    "RobotoCondensed-Regular",
    "RockSalt-Regular",
    "Romanesco-Regular",
    "Ruwudu-Bold",
    "Ruwudu-Medium",
    "Ruwudu-Regular",
    "Salsa-Regular",
    "Sansita-Bold",
    "Sansita-Italic",
    "Sansita-Regular",
    "ShortStack-Regular",
    "Silkscreen-Bold",
    "Silkscreen-Regular",
    "SofiaSansCondensed-Italic-VariableFont_wght",
    "SofiaSansCondensed-VariableFont_wght",
    "SofiaSansExtraCondensed-Italic-VariableFont_wght",
    "SofiaSansExtraCondensed-VariableFont_wght",
    "SueEllenFrancisco-Regular",
    "Tangerine-Bold",
    "Tangerine-Regular",
    "Teko-VariableFont_wght",
    "TenorSans-Regular",
    "TradeWinds-Regular",
    "UnifrakturCook-Bold",
    "VT323-Regular",
]
const style = document.createElement('style')

export default function loadFonts(fontFamilies) {
    fontFamilies.forEach((fontName) => {
        style.appendChild(
            document.createTextNode(`
            @font-face {
                font-family: '${fontName}';
                src: url('/fonts/${fontName}.ttf') format('truetype');
                font-weight: normal;
                font-style: normal;
            }
        `)
        )
        document.head.appendChild(style)

    })
}
