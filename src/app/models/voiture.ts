export class Voiture {
    id: number;
    ref: string;
    marque: string;
    modele: string;
    description: string;
    energie: string;
    annee: number;
    nbPortes: number;
    puissanceCV: string;
    CVFiscaux: string;
    boite: string;
    nbKm: number;
    prixVente: number;
    images: [string];
    options: [string];
    couleur: string;
    dateMiseEnLigne: Date;

    constructor(id?: number, ref?: string, marque?: string, modele?: string, description?: string, energie?: string, annee?: number, nbPortes?: number, puissanceCV?: string, CVFiscaux?: string, boite?: string, nbKm?: number, prixVente?: number, images?: [string], options?: [string], couleur?: string, dateMiseEnLigne?: Date) {
        this.id = id;
        this.ref = ref;
        this.marque = marque;
        this.modele = modele;
        this.description = description;
        this.energie = energie;
        this.annee = annee;
        this.nbPortes = nbPortes;
        this.puissanceCV = puissanceCV;
        this.CVFiscaux = CVFiscaux;
        this.boite = boite;
        this.nbKm = nbKm;
        this.prixVente = prixVente;
        this.images = images;
        this.options = options;
        this.couleur = couleur;
        this.dateMiseEnLigne = dateMiseEnLigne;
    }
}

    
      