import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { 
  LogOut,
  DollarSign,
  Plus,
  CreditCard,
  Clock,
  Users
} from 'lucide-react';

interface Employee {
  id: number;
  name: string;
  role: string;
}

interface ScreenContent {
  title: string;
  content: React.ReactNode;
}

interface Screens {
  [key: string]: ScreenContent;
}

const TipSharingApp: React.FC = () => {
  const screens: Screens = {
    login: {
      title: "Connexion",
      content: (
        <div className="space-y-4">
          <Input placeholder="Email" type="email" className="w-full" />
          <Input placeholder="Mot de passe" type="password" className="w-full" />
          <Button 
            className="w-full" 
            onClick={() => setCurrentScreen('dashboard')}
          >
            Se connecter
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setCurrentScreen('register')}
          >
            Créer un compte
          </Button>
        </div>
      )
    },

    register: {
      title: "Création de compte",
      content: (
        <div className="space-y-4">
          <Input placeholder="Nom" className="w-full" />
          <Input placeholder="Prénom" className="w-full" />
          <Input placeholder="Email" type="email" className="w-full" />
          <Input placeholder="Téléphone" type="tel" className="w-full" />
          <Input placeholder="Pays" className="w-full" />
          <Button 
            className="w-full"
            onClick={() => setCurrentScreen('dashboard')}
          >
            S'inscrire
          </Button>
        </div>
      )
    },

    dashboard: {
      title: "Tableau de bord",
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 whitespace-nowrap"
                onClick={() => setCurrentScreen('addStore')}
              >
                <Plus size={20} />
                Ajouter un point de vente
              </Button>
              {['Restaurant Le Gourmet', 'Bistrot de la Place', 'Café des Arts'].map((store) => (
                <Button 
                  key={store}
                  variant="outline"
                  className="whitespace-nowrap"
                >
                  {store}
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Restaurant Le Gourmet</h3>
            <p className="text-2xl font-bold">1,250.00 €</p>
            <p className="text-sm text-gray-600">Cagnotte totale</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button 
              className="h-24 flex flex-col items-center justify-center space-y-2"
              onClick={() => setCurrentScreen('managePot')}
            >
              <DollarSign size={24} />
              <span>Gérer la cagnotte</span>
            </Button>

            <Button 
              className="h-24 flex flex-col items-center justify-center space-y-2"
              onClick={() => setCurrentScreen('employeeDashboard')}
            >
              <Users size={24} />
              <span>Vue Employé</span>
            </Button>
          </div>
        </div>
      )
    },

    addStore: {
      title: "Ajouter un point de vente",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm">Les informations du point de vente sont nécessaires pour la gestion des paiements et l'attribution du numéro unique.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom du point de vente</label>
              <Input placeholder="ex: Restaurant Le Gourmet" className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Numéro SIRET</label>
              <Input placeholder="123 456 789 00012" className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Adresse</label>
              <Input placeholder="Numéro et rue" className="w-full mb-2" />
              <Input placeholder="Complément d'adresse" className="w-full mb-2" />
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Code postal" />
                <Input placeholder="Ville" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">IBAN</label>
              <Input placeholder="FR76 1234 5678 9123 4567 8912 345" className="w-full" />
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => setCurrentScreen('dashboard')}
            >
              Enregistrer le point de vente
            </Button>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => setCurrentScreen('dashboard')}
            >
              Annuler
            </Button>
          </div>
        </div>
      )
    },

    managePot: {
      title: "Gestion de la cagnotte",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-2xl font-bold">1,250.00 €</p>
            <p className="text-sm text-gray-600">Disponible pour distribution</p>
          </div>

          <Button 
            className="w-full"
            onClick={() => setCurrentScreen('customDistribution')}
          >
            Distribution personnalisée
          </Button>

          <Button className="w-full">
            Distribution égale entre tous
          </Button>

          <Button 
            className="w-full"
            onClick={() => setCurrentScreen('dashboard')}
          >
            Retour
          </Button>
        </div>
      )
    },

    customDistribution: {
      title: "Distribution personnalisée",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-2xl font-bold">1,250.00 €</p>
            <p className="text-sm text-gray-600">Montant à distribuer</p>
          </div>

          <div className="space-y-2">
            {[
              { name: 'Jean Martin', role: 'Serveur', id: 1 },
              { name: 'Marie Dubois', role: 'Serveuse', id: 2 },
              { name: 'Paul Durand', role: 'Cuisinier', id: 3 },
              { name: 'Sophie Petit', role: 'Plongeuse', id: 4 }
            ].map((employee) => (
              <div key={employee.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                <Checkbox id={`employee-${employee.id}`} />
                <div className="flex-grow">
                  <label htmlFor={`employee-${employee.id}`} className="font-medium">
                    {employee.name}
                  </label>
                  <p className="text-sm text-gray-600">{employee.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => setCurrentScreen('managePot')}
            >
              Confirmer la distribution
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setCurrentScreen('managePot')}
            >
              Annuler
            </Button>
          </div>
        </div>
      )
    },

    employeeDashboard: {
      title: "Mon compte employé",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Mes pourboires</h3>
            <p className="text-2xl font-bold">325.50 €</p>
            <p className="text-sm text-gray-600">Disponible pour retrait</p>
          </div>

          <div className="space-y-4">
            <Button className="w-full flex items-center gap-2">
              <CreditCard size={20} />
              Retirer sur mon compte
            </Button>

            <Button 
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <Clock size={20} />
              Historique
            </Button>
          </div>

          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setCurrentScreen('dashboard')}
          >
            Retour
          </Button>
        </div>
      )
    }
    };

    const [currentScreen, setCurrentScreen] = useState<string>('login');
    const currentScreenData = screens[currentScreen] || screens.login;

    return (
    <div className="max-w-md mx-auto p-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">{currentScreenData.title}</h2>
            {currentScreen !== 'login' && currentScreen !== 'register' && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setCurrentScreen('login')}
              >
                <LogOut size={20} />
              </Button>
            )}
          </div>
          {currentScreenData.content}
        </CardContent>
      </Card>
    </div>
    );
    };

    export default TipSharingApp;