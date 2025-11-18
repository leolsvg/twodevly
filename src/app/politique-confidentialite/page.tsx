import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Politique de Confidentialité | TwoDevly",
  description: "Politique de confidentialité et protection des données personnelles - TwoDevly",
};

export default function PolitiqueConfidentialite() {
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
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">1. Introduction</h2>
              <p className="mb-4">
                TwoDevly s&apos;engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité 
                explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles 
                conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
              <p>
                En utilisant notre site web, vous acceptez les pratiques décrites dans cette politique.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">2. Données collectées</h2>
              <div className="bg-[#F8FBFC] rounded-xl p-6 mb-4">
                <h3 className="text-lg font-semibold mb-3">Données que nous collectons :</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Données de contact :</strong> nom, adresse email lorsque vous nous contactez</li>
                  <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
                  <li><strong>Cookies :</strong> petits fichiers stockés sur votre appareil pour améliorer l&apos;expérience utilisateur</li>
                </ul>
              </div>
              <p>
                <strong>Données que nous ne collectons PAS :</strong> nous ne collectons aucune donnée sensible 
                (origine ethnique, opinions politiques, données de santé, etc.).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">3. Finalités du traitement</h2>
              <p className="mb-4">Nous utilisons vos données personnelles pour :</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Répondre à vos demandes de contact et devis</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Analyser l&apos;utilisation de notre site (statistiques anonymes)</li>
                <li>Assurer la sécurité de notre site web</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">4. Base légale du traitement</h2>
              <p className="mb-4">Le traitement de vos données personnelles repose sur :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Votre consentement</strong> pour l&apos;utilisation des cookies non essentiels</li>
                <li><strong>L&apos;exécution d&apos;un contrat</strong> pour répondre à vos demandes de services</li>
                <li><strong>L&apos;intérêt légitime</strong> pour l&apos;amélioration de nos services et la sécurité</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">5. Partage des données</h2>
              <p className="mb-4">
                Nous ne vendons, n&apos;échangeons ni ne louons vos informations personnelles à des tiers. 
                Nous pouvons partager vos données uniquement dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Avec votre consentement explicite</li>
                <li>Pour répondre à une obligation légale</li>
                <li>Avec nos prestataires de services (hébergement, analytics) sous contrat de confidentialité</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">6. Sécurité des données</h2>
              <p className="mb-4">
                Nous mettons en place des mesures de sécurité appropriées pour protéger vos données personnelles 
                contre l&apos;accès non autorisé, la modification, la divulgation ou la destruction :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chiffrement SSL/TLS pour les transmissions de données</li>
                <li>Accès limité aux données personnelles</li>
                <li>Surveillance régulière de la sécurité</li>
                <li>Mise à jour régulière des systèmes de sécurité</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">7. Conservation des données</h2>
              <div className="bg-[#F8FBFC] rounded-xl p-6">
                <ul className="space-y-2">
                  <li><strong>Données de contact :</strong> conservées pendant 3 ans après le dernier contact</li>
                  <li><strong>Données de navigation :</strong> conservées pendant 13 mois maximum</li>
                  <li><strong>Cookies :</strong> durée de vie variable selon le type (session ou persistant)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">8. Vos droits (RGPD)</h2>
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@twodevly.com" className="text-[#FF5B04] hover:underline">contact@twodevly.com</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">9. Cookies</h2>
              <p className="mb-4">Notre site utilise différents types de cookies :</p>
              <div className="bg-[#F8FBFC] rounded-xl p-6">
                <ul className="space-y-3">
                  <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (pas de consentement requis)</li>
                  <li><strong>Cookies de performance :</strong> pour analyser l&apos;utilisation du site (consentement requis)</li>
                  <li><strong>Cookies fonctionnels :</strong> pour améliorer votre expérience utilisateur (consentement requis)</li>
                </ul>
              </div>
              <p className="mt-4">
                Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">10. Modifications de cette politique</h2>
              <p>
                Nous pouvons modifier cette politique de confidentialité occasionnellement. Les modifications 
                seront publiées sur cette page avec une date de mise à jour. Nous vous encourageons à consulter 
                régulièrement cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#FF5B04]">11. Contact</h2>
              <p className="mb-4">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, 
                vous pouvez nous contacter :
              </p>
              <div className="bg-[#F8FBFC] rounded-xl p-6">
                <p><strong>Email :</strong> <a href="mailto:contact@twodevly.com" className="text-[#FF5B04] hover:underline">contact@twodevly.com</a></p>
                <p><strong>Adresse :</strong> [À compléter]</p>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Dernière mise à jour :</strong> 17 novembre 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}