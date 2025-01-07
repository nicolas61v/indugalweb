
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GalvaGroup",
  description: "Expertos en galvanizado industrial. Tu solución en protección contra la corrosión.",
  info:{
    location: "Cl 36 #52-50, La Candelaria, Medellín",
    email: "info@galvagroup.com"
  },
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Productos y servicios",
      href: "/productos-y-servicios",
      dropdownItems:{
        items: [
          {
            label: "Galvanizado en caliente",
            href: "/productos-y-servicios/galvanizado-en-caliente",
          },
          {
            label: "Galvanizado en frio",
            href: "/productos-y-servicios/galvanizado-en-frio",
          },
          {
            label: "Procesos especiales",
            href: "/productos-y-servicios/procesos-especiales",  
          }
        ]
      }
    },
    {
      label: "Certificaciones",
      href: "/certificaciones",
    },
    {
      label: "Nosotros",
      href: "/nosotros",
    },
    {
      label: "Contacto",
      href: "/#contacto",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Productos y servicios",
      href: "/productos-y-servicios",
      dropdownItems:{
        items: [
          {
            label: "Galvanizado en caliente",
            href: "/galvanizado-en-caliente",
          },
          {
            label: "Galvanizado en frio",
            href: "/galvanizado-en-frio",
          },
          {
            label: "Procesos especiales",
            href: "/procesos-especiales",  
          }
        ]
      }
    },
    {
      label: "Certificaciones",
      href: "/certificaciones",
    },
    {
      label: "Nosotros",
      href: "/nosotros",
    },
    {
      label: "Contacto",
      href: "/#contacto",
    },
  ],
  links: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
};
