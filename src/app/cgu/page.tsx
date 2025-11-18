import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Conditions Générales d'Utilisation | TwoDevly",
  description: "Conditions générales d'utilisation du site TwoDevly",
};

export default function CGU() {
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
            Conditions Générales d&apos;Utilisation
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">1. Objet</h2>
              <p>
                Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de définir les modalités 
                et conditions d&apos;utilisation du site internet TwoDevly accessible à l&apos;adresse [URL du site].
              </p>
              <p className="mt-4">
                L&apos;utilisation du site implique l&apos;acceptation pleine et entière des présentes CGU par l&apos;utilisateur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">2. Accès au site</h2>
              <p className="mb-4">
                Le site est accessible gratuitement en tout lieu à tout utilisateur ayant un accès à Internet. 
                Tous les frais supportés par l&apos;utilisateur pour accéder au service (matériel informatique, 
                logiciels, connexion Internet, etc.) sont à sa charge.
              </p>
              <p>
                TwoDevly met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de 
                qualité au service, mais n&apos;est tenue à aucune obligation d&apos;y parvenir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">3. Collecte des données</h2>
              <p className="mb-4">
                Le site est exempté de déclaration à la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) 
                dans la mesure où il ne collecte aucune donnée concernant les utilisateurs.
              </p>
              <p>
                Lorsque vous nous contactez via le formulaire de contact ou par email, nous collectons uniquement 
                les informations nécessaires pour répondre à votre demande (nom, email, message).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">4. Propriété intellectuelle</h2>
              <p className="mb-4">
                TwoDevly est propriétaire des droits de propriété intellectuelle ou détient les droits d&apos;usage sur 
                tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logos, icônes, 
                sons, logiciels.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des 
                éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation 
                écrite préalable de TwoDevly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">5. Responsabilité</h2>
              <p className="mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à 
                différentes périodes de l&apos;année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p>
                TwoDevly ne pourra être tenue responsable des dommages directs et indirects causés au matériel de 
                l&apos;utilisateur, lors de l&apos;accès au site, et résultant soit de l&apos;utilisation d&apos;un matériel ne 
                répondant pas aux spécifications indiquées, soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">6. Liens hypertextes</h2>
              <p className="mb-4">
                Des liens hypertextes peuvent être présents sur le site. L&apos;utilisateur est informé qu&apos;en cliquant 
                sur ces liens, il sortira du site TwoDevly. Ce dernier n&apos;a pas de contrôle sur les pages web sur 
                lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">7. Cookies</h2>
              <p className="mb-4">
                L&apos;utilisateur est informé que lors de ses visites sur le site, un cookie peut s&apos;installer 
                automatiquement sur son logiciel de navigation.
              </p>
              <p>
                Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l&apos;ordinateur de 
                l&apos;utilisateur par votre navigateur et qui sont nécessaires à l&apos;utilisation du site TwoDevly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">8. Droit applicable et attribution de juridiction</h2>
              <p>
                Tout litige en relation avec l&apos;usage du site TwoDevly est soumis au droit français. Il est fait 
                attribution exclusive de juridiction aux tribunaux compétents de [Ville], sauf dispositions 
                contraires d&apos;ordre public.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">9. Évolution des conditions d&apos;utilisation</h2>
              <p>
                Le site TwoDevly se réserve à tout moment le droit de modifier, compléter ou supprimer tout ou 
                partie des présentes conditions générales d&apos;utilisation. L&apos;utilisateur doit donc se référer 
                régulièrement à cette rubrique pour vérifier les conditions générales en vigueur.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}