import "./App.css";
import "./styles/globals.css";
import TipSharingApp from "./components/TipSharingApp";

import { Card, CardContent } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Barre de Navigation */}
      <nav className="border-b bg-card p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Tips App</h1>
          <div className="flex gap-4">
            <Button variant="ghost">Accueil</Button>
            <Button variant="ghost">Mes Tips</Button>
            <Button>Nouveau Tip</Button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partagez vos connaissances
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Une plateforme pour partager et découvrir des astuces de développement
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg">Commencer</Button>
            <Button variant="outline" size="lg">En savoir plus</Button>
          </div>
        </section>

        {/* Barre de recherche */}
        <Card className="mb-8">
          <CardContent className="py-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Input 
                placeholder="Rechercher un tip..."
                className="flex-1"
              />
              <Button className="md:w-auto w-full">
                Rechercher
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button variant="outline" size="sm">Tous</Button>
          <Button variant="ghost" size="sm">React</Button>
          <Button variant="ghost" size="sm">TypeScript</Button>
          <Button variant="ghost" size="sm">CSS</Button>
        </div>

        {/* Grille de Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tip Card 1 */}
          <Card hover variant="elevated" className="h-full">
            <CardContent>
              <div className="mb-4">
                <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                  React
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Hooks useState</h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                Comment utiliser efficacement le hook useState dans vos composants React
              </p>
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm">
                  Lire
                </Button>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    Sauvegarder
                  </Button>
                  <Button variant="ghost" size="sm">
                    Partager
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plus de cards similaires... */}
        </div>

        {/* Section Newsletter */}
        <Card className="bg-primary/5 mt-12">
          <CardContent className="py-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
            <p className="text-muted-foreground mb-6">
              Recevez les meilleurs tips directement dans votre boîte mail
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Votre email"
                type="email"
              />
              <Button>S'abonner</Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="max-w-6xl mx-auto py-8 px-4 text-center text-muted-foreground">
          <p>© 2024 Tips App. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default App