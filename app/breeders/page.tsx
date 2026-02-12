import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Mail, Globe, Phone } from "lucide-react"

interface Breeder {
    name: string
    location: string
    email?: string
    website?: string
    details: string[]
    phone?: string
}

export default function BreedersPage() {
    const breeders: Breeder[] = [
        {
            name: "CHERYLN SHEPHERDS",
            location: "Stratford, CT",
            email: "CherLynGSD@cherlynshepherds.com",
            website: "http://www.CherLynShepherds.com",
            details: ["AKC Breeder of Merrit", "Member of GSDCA"],
            phone: "(203) 395-8GSD",
        },
        {
            name: "DEBRA GRIECO GERMAN SHEPHERDS",
            location: "Danbury, CT",
            website: "https://www.DebraGriecoGermanShepherds.com",
            details: ["AKC Champion Bloodline", "Puppies Available (August 2024)", "Member of GSDCA"],
            phone: "(845) 590-9301",
        },
        {
            name: "LEGATEHILL GERMAN SHEPHERDS",
            location: "Sandy Hook, CT.",
            details: ["web cam, pedigrees and more."],
            email: "legatehill@yahoo.com",
        },
        {
            name: "MASSTANA GERMAN SHEPHERDS",
            location: "Ridgefield, CT",
            details: ["We have pups available from time to time please contact John or Nancy for information."],
            email: "MASSTANA@aol.com",
            phone: "203 438 7062",
        },
        {
            name: "MYSTRA GERMAN SHEPHERDS",
            location: "Watertown, CT",
            website: "http://www.mystrashepherds.com/",
            details: ["Black/tan, Black/red & Sable Puppies Available"],
        },
        {
            name: "RALLYNS GERMAN SHEPHERDS",
            location: "Trumbull, CT.",
            details: [],
            email: "Lyneagle72@gmail.com",
            phone: "203-268-0265",
        },
        {
            name: "TOTANA PIPER HILL GERMAN SHEPHERDS",
            location: "Killingworth, CT",
            website: "https://www.totana-at-piperhill.com/",
            details: [
                "Breeding quality AKC German and American bloodline puppies for home, show, and all obedience/schutzhund disciplines since 1967.",
            ],
            email: "Totanapiperhill@aol.com",
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Breeders</h1>
                    </div>

                    <div className="bg-chrome-200 rounded-lg p-8 mb-12 shadow-lg">
                        <p className="text-gray-900 mb-4">
                            The GSDC/GNH Inc. offers this listing of club members who breed German Shepherds. The club encourages our
                            members to breed responsibly and to adhere to the{" "}
                            Breeders Code of Ethics
                            {" "}
                            and the{" "}
                            German Shepherd Breed Standards
                            . The club can not/does not claim responsibility for the actions of any individual member. It is the
                            responsibility of the potential buyer to assure themselves that the breeder adheres to high standards of
                            ethics.
                        </p>
                        <p className="text-gray-900 mb-4">
                            The German Shepherd Dog Club is a diverse group of people involved with the breeding, raising, exhibiting,
                            training, promoting and loving the German Shepherd Dog. Most of us are dedicated to the betterment of our
                            breed and adhere to a high standard of ethics. Many are signers of the &quot;Breeders Code of Ethics&quot;.
                        </p>
                        <p className="text-gray-900">
                            For news about upcoming litters, please visit our{" "}
                            <Link href="/breeding-news" className="text-gray-900 hover:underline">
                                Breeding News
                            </Link>
                            .
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Breeders Listed in Alphabetical order.</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {breeders.map((breeder, index) => (
                            <Card key={index} className="bg-chrome-800 border-chrome-600 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-chrome-200 text-xl">{breeder.name}</CardTitle>
                                    <p className="text-chrome-400 text-sm">{breeder.location}</p>
                                </CardHeader>
                                <CardContent className="space-y-3 text-chrome-300">
                                    {breeder.email && (
                                        <div className="flex items-center gap-2 text-sm">
                                            <Mail className="h-4 w-4 text-chrome-400" />
                                            <a href={`mailto:${breeder.email}`} className="hover:text-white transition-colors">
                                                {breeder.email}
                                            </a>
                                        </div>
                                    )}
                                    {breeder.website && (
                                        <div className="flex items-center gap-2 text-sm">
                                            <Globe className="h-4 w-4 text-chrome-400" />
                                            <a
                                                href={breeder.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white transition-colors"
                                            >
                                                {breeder.website.replace(/^(https?:\/\/)?(www\.)?/i, "").replace(/\/$/, "")}
                                            </a>
                                        </div>
                                    )}
                                    {breeder.phone && (
                                        <div className="flex items-center gap-2 text-sm">
                                            <Phone className="h-4 w-4 text-chrome-400" />
                                            <span>{breeder.phone}</span>
                                        </div>
                                    )}
                                    {breeder.details.length > 0 && (
                                        <ul className="list-disc list-inside space-y-1 text-sm">
                                            {breeder.details.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}