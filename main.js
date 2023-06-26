import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
const nuevovegetal = await prisma.vegetales.create({
    data: {
        nombre: "Pepino",
        pais: "Costa Rica",
        precio: "1000",
        cantidad: "100",
        tipofruta: "Fruta",
    },
});
console.log("Nueva verdura creada: ", nuevovegetal);
const todosVegetales = await prisma.vegetales.findMany();
console.log("Todos los vegetales: ");
console.dir(todosVegetales, {depth: null });
}

main()
.catch((e) =>{
    console.error(e);
    ProcessingInstruction.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});