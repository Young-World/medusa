import { BatchJob, Order } from "../../../models";
import { Selector } from "../../../types/common";
export declare type OrderExportBatchJobContext = {
    offset?: number;
    limit?: number;
    order?: string;
    fields?: string;
    expand?: string;
    list_config?: {
        select?: string[];
        relations?: string[];
        skip?: number;
        take?: number;
        order?: Record<string, "ASC" | "DESC">;
    };
    filterable_fields?: Selector<Order>;
    retry_count?: number;
    max_retry?: number;
    batch_size?: number;
};
export declare type OrderExportBatchJob = BatchJob & {
    context: OrderExportBatchJobContext;
};
export declare type OrderDescriptor = {
    fieldName: string;
    title: string;
    accessor: (entity: Order) => string;
};
export declare const orderExportPropertiesDescriptors: OrderDescriptor[];
