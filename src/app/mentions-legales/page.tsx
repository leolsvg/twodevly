import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Mentions légales | TwoDevly",
  description: "Mentions légales de TwoDevly - Informations légales et réglementaires",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#E4EEF0] text-[#16232A]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-[#FF5B04] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l&apos;accueil
        </Link>

        <div className="bg-white rounded-3xl border border-[#D5E1E4] shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Mentions légales
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">1. Informations légales</h2>
              <p className="mb-4">
                Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 
                pour la Confiance dans l&apos;économie numérique, dite L.C.E.N., et de l&apos;article 6 de la loi n°2002-158 
                du 6 février 2002 relative aux dispositions générales de protection des personnes à l&apos;égard des 
                traitements de données à caractère personnel, nous portons à la connaissance des utilisateurs du site 
                les informations suivantes :
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">2. Éditeur du site</h2>
              <div className="bg-[#F8FBFC] rounded-xl p-6">
                <p><strong>Raison sociale :</strong> TwoDevly</p>
                <p><strong>Statut juridique :</strong> Auto-entrepreneur</p>
                <p><strong>Adresse :</strong> [À compléter]</p>
                <p><strong>Email :</strong> contact@twodevly.com</p>
                <p><strong>Directeur de la publication :</strong> [À compléter]</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">3. Hébergeur</h2>
              <div className="bg-[#F8FBFC] rounded-xl p-6">
                <p><strong>Nom :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-[#FF5B04] hover:underline">vercel.com</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">4. Propriété intellectuelle</h2>
              <p className="mb-4">
                L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quelconque est formellement 
                interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">5. Responsabilité</h2>
              <p className="mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement 
                remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir 
                le signaler par email en décrivant le problème de la manière la plus précise possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">6. Liens hypertextes</h2>
              <p className="mb-4">
                Les sites internet peuvent proposer des liens vers d&apos;autres sites internet ou d&apos;autres ressources 
                disponibles sur Internet. TwoDevly ne dispose d&apos;aucun moyen pour contrôler les sites en connexion 
                avec ses sites internet.
              </p>
              <p>
                TwoDevly ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. 
                Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant 
                du contenu de ces sites ou sources externes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">7. Droit applicable</h2>
              <p>
                Tout litige en relation avec l&apos;usage du site est soumis au droit français. En dehors des cas où la 
                loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}