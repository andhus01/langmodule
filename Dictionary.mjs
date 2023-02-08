class Dictionary{

    constructor(...languages){
        this.languagefiles = languages
        this.dictionary = null;
        this.currentLanguage = null
    }

    setLanguage = async function(lang){
        // Velger språket som skal brukes.

        let languageFile = this.languagefiles.find( file => {
             return file.indexOf(lang) != -1
            });
        
        this.currentLanguage = lang;

        this.dictionary = await import(languageFile, { assert: { type: "json" } });
    }

    translate(key){
        // Henter riktig verdi basert på key i dictionary.
        return this.dictionary[key];
    }

    getAllKeys(){
        // retunerer alle keys i dictionary 
        return Object.keys( this.dictionary);
    }
}

/*let dict = new Dictionary("./lan/en.json");
dict.setLanguage("no");
dict.translate("end");*/

export default Dictionary;