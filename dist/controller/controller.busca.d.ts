import { RowDataPacket } from 'mysql2';
interface requisition {
    "reqType": string;
    "search": string;
}
export default function pesquisaData(data: requisition): Promise<string | number | RowDataPacket[]>;
export {};
//# sourceMappingURL=controller.busca.d.ts.map