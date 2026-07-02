
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Assessment
 * 
 */
export type Assessment = $Result.DefaultSelection<Prisma.$AssessmentPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Framework
 * 
 */
export type Framework = $Result.DefaultSelection<Prisma.$FrameworkPayload>
/**
 * Model Mapping
 * 
 */
export type Mapping = $Result.DefaultSelection<Prisma.$MappingPayload>
/**
 * Model PolicyDocument
 * 
 */
export type PolicyDocument = $Result.DefaultSelection<Prisma.$PolicyDocumentPayload>
/**
 * Model RemediationTask
 * 
 */
export type RemediationTask = $Result.DefaultSelection<Prisma.$RemediationTaskPayload>
/**
 * Model RiskRegister
 * 
 */
export type RiskRegister = $Result.DefaultSelection<Prisma.$RiskRegisterPayload>
/**
 * Model SecurityAlert
 * 
 */
export type SecurityAlert = $Result.DefaultSelection<Prisma.$SecurityAlertPayload>
/**
 * Model EmployeeAttestation
 * 
 */
export type EmployeeAttestation = $Result.DefaultSelection<Prisma.$EmployeeAttestationPayload>
/**
 * Model ConnectorScanLog
 * 
 */
export type ConnectorScanLog = $Result.DefaultSelection<Prisma.$ConnectorScanLogPayload>
/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model AuditComment
 * 
 */
export type AuditComment = $Result.DefaultSelection<Prisma.$AuditCommentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessment`: Exposes CRUD operations for the **Assessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessment.findMany()
    * ```
    */
  get assessment(): Prisma.AssessmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.framework`: Exposes CRUD operations for the **Framework** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Frameworks
    * const frameworks = await prisma.framework.findMany()
    * ```
    */
  get framework(): Prisma.FrameworkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapping`: Exposes CRUD operations for the **Mapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mappings
    * const mappings = await prisma.mapping.findMany()
    * ```
    */
  get mapping(): Prisma.MappingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policyDocument`: Exposes CRUD operations for the **PolicyDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PolicyDocuments
    * const policyDocuments = await prisma.policyDocument.findMany()
    * ```
    */
  get policyDocument(): Prisma.PolicyDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.remediationTask`: Exposes CRUD operations for the **RemediationTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RemediationTasks
    * const remediationTasks = await prisma.remediationTask.findMany()
    * ```
    */
  get remediationTask(): Prisma.RemediationTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.riskRegister`: Exposes CRUD operations for the **RiskRegister** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskRegisters
    * const riskRegisters = await prisma.riskRegister.findMany()
    * ```
    */
  get riskRegister(): Prisma.RiskRegisterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityAlert`: Exposes CRUD operations for the **SecurityAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityAlerts
    * const securityAlerts = await prisma.securityAlert.findMany()
    * ```
    */
  get securityAlert(): Prisma.SecurityAlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeAttestation`: Exposes CRUD operations for the **EmployeeAttestation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeAttestations
    * const employeeAttestations = await prisma.employeeAttestation.findMany()
    * ```
    */
  get employeeAttestation(): Prisma.EmployeeAttestationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connectorScanLog`: Exposes CRUD operations for the **ConnectorScanLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConnectorScanLogs
    * const connectorScanLogs = await prisma.connectorScanLog.findMany()
    * ```
    */
  get connectorScanLog(): Prisma.ConnectorScanLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditComment`: Exposes CRUD operations for the **AuditComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditComments
    * const auditComments = await prisma.auditComment.findMany()
    * ```
    */
  get auditComment(): Prisma.AuditCommentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    Assessment: 'Assessment',
    Question: 'Question',
    Answer: 'Answer',
    Framework: 'Framework',
    Mapping: 'Mapping',
    PolicyDocument: 'PolicyDocument',
    RemediationTask: 'RemediationTask',
    RiskRegister: 'RiskRegister',
    SecurityAlert: 'SecurityAlert',
    EmployeeAttestation: 'EmployeeAttestation',
    ConnectorScanLog: 'ConnectorScanLog',
    Vendor: 'Vendor',
    AuditComment: 'AuditComment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "assessment" | "question" | "answer" | "framework" | "mapping" | "policyDocument" | "remediationTask" | "riskRegister" | "securityAlert" | "employeeAttestation" | "connectorScanLog" | "vendor" | "auditComment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Assessment: {
        payload: Prisma.$AssessmentPayload<ExtArgs>
        fields: Prisma.AssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findFirst: {
            args: Prisma.AssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findMany: {
            args: Prisma.AssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          create: {
            args: Prisma.AssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          createMany: {
            args: Prisma.AssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          delete: {
            args: Prisma.AssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          update: {
            args: Prisma.AssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          upsert: {
            args: Prisma.AssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessment>
          }
          groupBy: {
            args: Prisma.AssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Framework: {
        payload: Prisma.$FrameworkPayload<ExtArgs>
        fields: Prisma.FrameworkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FrameworkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FrameworkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>
          }
          findFirst: {
            args: Prisma.FrameworkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FrameworkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>
          }
          findMany: {
            args: Prisma.FrameworkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>[]
          }
          create: {
            args: Prisma.FrameworkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>
          }
          createMany: {
            args: Prisma.FrameworkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FrameworkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>[]
          }
          delete: {
            args: Prisma.FrameworkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>
          }
          update: {
            args: Prisma.FrameworkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>
          }
          deleteMany: {
            args: Prisma.FrameworkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FrameworkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FrameworkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>[]
          }
          upsert: {
            args: Prisma.FrameworkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>
          }
          aggregate: {
            args: Prisma.FrameworkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFramework>
          }
          groupBy: {
            args: Prisma.FrameworkGroupByArgs<ExtArgs>
            result: $Utils.Optional<FrameworkGroupByOutputType>[]
          }
          count: {
            args: Prisma.FrameworkCountArgs<ExtArgs>
            result: $Utils.Optional<FrameworkCountAggregateOutputType> | number
          }
        }
      }
      Mapping: {
        payload: Prisma.$MappingPayload<ExtArgs>
        fields: Prisma.MappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>
          }
          findFirst: {
            args: Prisma.MappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>
          }
          findMany: {
            args: Prisma.MappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>[]
          }
          create: {
            args: Prisma.MappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>
          }
          createMany: {
            args: Prisma.MappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>[]
          }
          delete: {
            args: Prisma.MappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>
          }
          update: {
            args: Prisma.MappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>
          }
          deleteMany: {
            args: Prisma.MappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>[]
          }
          upsert: {
            args: Prisma.MappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>
          }
          aggregate: {
            args: Prisma.MappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapping>
          }
          groupBy: {
            args: Prisma.MappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MappingCountArgs<ExtArgs>
            result: $Utils.Optional<MappingCountAggregateOutputType> | number
          }
        }
      }
      PolicyDocument: {
        payload: Prisma.$PolicyDocumentPayload<ExtArgs>
        fields: Prisma.PolicyDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyDocumentPayload>
          }
          findFirst: {
            args: Prisma.PolicyDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyDocumentPayload>
          }
          findMany: {
            args: Prisma.PolicyDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyDocumentPayload>[]
          }
          create: {
            args: Prisma.PolicyDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyDocumentPayload>
          }
          createMany: {
            args: Prisma.PolicyDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyDocumentPayload>[]
          }
          delete: {
            args: Prisma.PolicyDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyDocumentPayload>
          }
          update: {
            args: Prisma.PolicyDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyDocumentPayload>
          }
          deleteMany: {
            args: Prisma.PolicyDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolicyDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyDocumentPayload>[]
          }
          upsert: {
            args: Prisma.PolicyDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyDocumentPayload>
          }
          aggregate: {
            args: Prisma.PolicyDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicyDocument>
          }
          groupBy: {
            args: Prisma.PolicyDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyDocumentCountAggregateOutputType> | number
          }
        }
      }
      RemediationTask: {
        payload: Prisma.$RemediationTaskPayload<ExtArgs>
        fields: Prisma.RemediationTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RemediationTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemediationTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RemediationTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemediationTaskPayload>
          }
          findFirst: {
            args: Prisma.RemediationTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemediationTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RemediationTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemediationTaskPayload>
          }
          findMany: {
            args: Prisma.RemediationTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemediationTaskPayload>[]
          }
          create: {
            args: Prisma.RemediationTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemediationTaskPayload>
          }
          createMany: {
            args: Prisma.RemediationTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RemediationTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemediationTaskPayload>[]
          }
          delete: {
            args: Prisma.RemediationTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemediationTaskPayload>
          }
          update: {
            args: Prisma.RemediationTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemediationTaskPayload>
          }
          deleteMany: {
            args: Prisma.RemediationTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RemediationTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RemediationTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemediationTaskPayload>[]
          }
          upsert: {
            args: Prisma.RemediationTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemediationTaskPayload>
          }
          aggregate: {
            args: Prisma.RemediationTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRemediationTask>
          }
          groupBy: {
            args: Prisma.RemediationTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemediationTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.RemediationTaskCountArgs<ExtArgs>
            result: $Utils.Optional<RemediationTaskCountAggregateOutputType> | number
          }
        }
      }
      RiskRegister: {
        payload: Prisma.$RiskRegisterPayload<ExtArgs>
        fields: Prisma.RiskRegisterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskRegisterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRegisterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskRegisterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRegisterPayload>
          }
          findFirst: {
            args: Prisma.RiskRegisterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRegisterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskRegisterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRegisterPayload>
          }
          findMany: {
            args: Prisma.RiskRegisterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRegisterPayload>[]
          }
          create: {
            args: Prisma.RiskRegisterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRegisterPayload>
          }
          createMany: {
            args: Prisma.RiskRegisterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskRegisterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRegisterPayload>[]
          }
          delete: {
            args: Prisma.RiskRegisterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRegisterPayload>
          }
          update: {
            args: Prisma.RiskRegisterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRegisterPayload>
          }
          deleteMany: {
            args: Prisma.RiskRegisterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskRegisterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiskRegisterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRegisterPayload>[]
          }
          upsert: {
            args: Prisma.RiskRegisterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRegisterPayload>
          }
          aggregate: {
            args: Prisma.RiskRegisterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskRegister>
          }
          groupBy: {
            args: Prisma.RiskRegisterGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskRegisterGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskRegisterCountArgs<ExtArgs>
            result: $Utils.Optional<RiskRegisterCountAggregateOutputType> | number
          }
        }
      }
      SecurityAlert: {
        payload: Prisma.$SecurityAlertPayload<ExtArgs>
        fields: Prisma.SecurityAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAlertPayload>
          }
          findFirst: {
            args: Prisma.SecurityAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAlertPayload>
          }
          findMany: {
            args: Prisma.SecurityAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAlertPayload>[]
          }
          create: {
            args: Prisma.SecurityAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAlertPayload>
          }
          createMany: {
            args: Prisma.SecurityAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAlertPayload>[]
          }
          delete: {
            args: Prisma.SecurityAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAlertPayload>
          }
          update: {
            args: Prisma.SecurityAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAlertPayload>
          }
          deleteMany: {
            args: Prisma.SecurityAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAlertPayload>[]
          }
          upsert: {
            args: Prisma.SecurityAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAlertPayload>
          }
          aggregate: {
            args: Prisma.SecurityAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityAlert>
          }
          groupBy: {
            args: Prisma.SecurityAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityAlertCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityAlertCountAggregateOutputType> | number
          }
        }
      }
      EmployeeAttestation: {
        payload: Prisma.$EmployeeAttestationPayload<ExtArgs>
        fields: Prisma.EmployeeAttestationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeAttestationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttestationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeAttestationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttestationPayload>
          }
          findFirst: {
            args: Prisma.EmployeeAttestationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttestationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeAttestationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttestationPayload>
          }
          findMany: {
            args: Prisma.EmployeeAttestationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttestationPayload>[]
          }
          create: {
            args: Prisma.EmployeeAttestationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttestationPayload>
          }
          createMany: {
            args: Prisma.EmployeeAttestationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeAttestationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttestationPayload>[]
          }
          delete: {
            args: Prisma.EmployeeAttestationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttestationPayload>
          }
          update: {
            args: Prisma.EmployeeAttestationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttestationPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeAttestationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeAttestationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeAttestationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttestationPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeAttestationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAttestationPayload>
          }
          aggregate: {
            args: Prisma.EmployeeAttestationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeAttestation>
          }
          groupBy: {
            args: Prisma.EmployeeAttestationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeAttestationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeAttestationCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeAttestationCountAggregateOutputType> | number
          }
        }
      }
      ConnectorScanLog: {
        payload: Prisma.$ConnectorScanLogPayload<ExtArgs>
        fields: Prisma.ConnectorScanLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectorScanLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorScanLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectorScanLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorScanLogPayload>
          }
          findFirst: {
            args: Prisma.ConnectorScanLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorScanLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectorScanLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorScanLogPayload>
          }
          findMany: {
            args: Prisma.ConnectorScanLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorScanLogPayload>[]
          }
          create: {
            args: Prisma.ConnectorScanLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorScanLogPayload>
          }
          createMany: {
            args: Prisma.ConnectorScanLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectorScanLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorScanLogPayload>[]
          }
          delete: {
            args: Prisma.ConnectorScanLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorScanLogPayload>
          }
          update: {
            args: Prisma.ConnectorScanLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorScanLogPayload>
          }
          deleteMany: {
            args: Prisma.ConnectorScanLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectorScanLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectorScanLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorScanLogPayload>[]
          }
          upsert: {
            args: Prisma.ConnectorScanLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorScanLogPayload>
          }
          aggregate: {
            args: Prisma.ConnectorScanLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnectorScanLog>
          }
          groupBy: {
            args: Prisma.ConnectorScanLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectorScanLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectorScanLogCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectorScanLogCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      AuditComment: {
        payload: Prisma.$AuditCommentPayload<ExtArgs>
        fields: Prisma.AuditCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditCommentPayload>
          }
          findFirst: {
            args: Prisma.AuditCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditCommentPayload>
          }
          findMany: {
            args: Prisma.AuditCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditCommentPayload>[]
          }
          create: {
            args: Prisma.AuditCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditCommentPayload>
          }
          createMany: {
            args: Prisma.AuditCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditCommentPayload>[]
          }
          delete: {
            args: Prisma.AuditCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditCommentPayload>
          }
          update: {
            args: Prisma.AuditCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditCommentPayload>
          }
          deleteMany: {
            args: Prisma.AuditCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditCommentPayload>[]
          }
          upsert: {
            args: Prisma.AuditCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditCommentPayload>
          }
          aggregate: {
            args: Prisma.AuditCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditComment>
          }
          groupBy: {
            args: Prisma.AuditCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditCommentCountArgs<ExtArgs>
            result: $Utils.Optional<AuditCommentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    assessment?: AssessmentOmit
    question?: QuestionOmit
    answer?: AnswerOmit
    framework?: FrameworkOmit
    mapping?: MappingOmit
    policyDocument?: PolicyDocumentOmit
    remediationTask?: RemediationTaskOmit
    riskRegister?: RiskRegisterOmit
    securityAlert?: SecurityAlertOmit
    employeeAttestation?: EmployeeAttestationOmit
    connectorScanLog?: ConnectorScanLogOmit
    vendor?: VendorOmit
    auditComment?: AuditCommentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    assessments: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessments?: boolean | OrganizationCountOutputTypeCountAssessmentsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }


  /**
   * Count Type AssessmentCountOutputType
   */

  export type AssessmentCountOutputType = {
    answers: number
  }

  export type AssessmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | AssessmentCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentCountOutputType
     */
    select?: AssessmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
    mappings: number
    auditComments: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
    mappings?: boolean | QuestionCountOutputTypeCountMappingsArgs
    auditComments?: boolean | QuestionCountOutputTypeCountAuditCommentsArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MappingWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAuditCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditCommentWhereInput
  }


  /**
   * Count Type FrameworkCountOutputType
   */

  export type FrameworkCountOutputType = {
    mappings: number
  }

  export type FrameworkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | FrameworkCountOutputTypeCountMappingsArgs
  }

  // Custom InputTypes
  /**
   * FrameworkCountOutputType without action
   */
  export type FrameworkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameworkCountOutputType
     */
    select?: FrameworkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FrameworkCountOutputType without action
   */
  export type FrameworkCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MappingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assessments?: boolean | Organization$assessmentsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessments?: boolean | Organization$assessmentsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      assessments: Prisma.$AssessmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assessments<T extends Organization$assessmentsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$assessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.assessments
   */
  export type Organization$assessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Assessment
   */

  export type AggregateAssessment = {
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  export type AssessmentAvgAggregateOutputType = {
    score: number | null
  }

  export type AssessmentSumAggregateOutputType = {
    score: number | null
  }

  export type AssessmentMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    score: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    score: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentCountAggregateOutputType = {
    id: number
    organizationId: number
    score: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssessmentAvgAggregateInputType = {
    score?: true
  }

  export type AssessmentSumAggregateInputType = {
    score?: true
  }

  export type AssessmentMinAggregateInputType = {
    id?: true
    organizationId?: true
    score?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentMaxAggregateInputType = {
    id?: true
    organizationId?: true
    score?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentCountAggregateInputType = {
    id?: true
    organizationId?: true
    score?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessment to aggregate.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentMaxAggregateInputType
  }

  export type GetAssessmentAggregateType<T extends AssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessment[P]>
      : GetScalarType<T[P], AggregateAssessment[P]>
  }




  export type AssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithAggregationInput | AssessmentOrderByWithAggregationInput[]
    by: AssessmentScalarFieldEnum[] | AssessmentScalarFieldEnum
    having?: AssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentCountAggregateInputType | true
    _avg?: AssessmentAvgAggregateInputType
    _sum?: AssessmentSumAggregateInputType
    _min?: AssessmentMinAggregateInputType
    _max?: AssessmentMaxAggregateInputType
  }

  export type AssessmentGroupByOutputType = {
    id: string
    organizationId: string
    score: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  type GetAssessmentGroupByPayload<T extends AssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    score?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    answers?: boolean | Assessment$answersArgs<ExtArgs>
    _count?: boolean | AssessmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    score?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    score?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectScalar = {
    id?: boolean
    organizationId?: boolean
    score?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "score" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["assessment"]>
  export type AssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    answers?: boolean | Assessment$answersArgs<ExtArgs>
    _count?: boolean | AssessmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssessmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type AssessmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $AssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessment"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      score: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assessment"]>
    composites: {}
  }

  type AssessmentGetPayload<S extends boolean | null | undefined | AssessmentDefaultArgs> = $Result.GetResult<Prisma.$AssessmentPayload, S>

  type AssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentCountAggregateInputType | true
    }

  export interface AssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessment'], meta: { name: 'Assessment' } }
    /**
     * Find zero or one Assessment that matches the filter.
     * @param {AssessmentFindUniqueArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentFindUniqueArgs>(args: SelectSubset<T, AssessmentFindUniqueArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentFindUniqueOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentFindFirstArgs>(args?: SelectSubset<T, AssessmentFindFirstArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessment.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentWithIdOnly = await prisma.assessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentFindManyArgs>(args?: SelectSubset<T, AssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assessment.
     * @param {AssessmentCreateArgs} args - Arguments to create a Assessment.
     * @example
     * // Create one Assessment
     * const Assessment = await prisma.assessment.create({
     *   data: {
     *     // ... data to create a Assessment
     *   }
     * })
     * 
     */
    create<T extends AssessmentCreateArgs>(args: SelectSubset<T, AssessmentCreateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assessments.
     * @param {AssessmentCreateManyArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentCreateManyArgs>(args?: SelectSubset<T, AssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assessments and returns the data saved in the database.
     * @param {AssessmentCreateManyAndReturnArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assessment.
     * @param {AssessmentDeleteArgs} args - Arguments to delete one Assessment.
     * @example
     * // Delete one Assessment
     * const Assessment = await prisma.assessment.delete({
     *   where: {
     *     // ... filter to delete one Assessment
     *   }
     * })
     * 
     */
    delete<T extends AssessmentDeleteArgs>(args: SelectSubset<T, AssessmentDeleteArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assessment.
     * @param {AssessmentUpdateArgs} args - Arguments to update one Assessment.
     * @example
     * // Update one Assessment
     * const assessment = await prisma.assessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentUpdateArgs>(args: SelectSubset<T, AssessmentUpdateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentDeleteManyArgs>(args?: SelectSubset<T, AssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentUpdateManyArgs>(args: SelectSubset<T, AssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments and returns the data updated in the database.
     * @param {AssessmentUpdateManyAndReturnArgs} args - Arguments to update many Assessments.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssessmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assessment.
     * @param {AssessmentUpsertArgs} args - Arguments to update or create a Assessment.
     * @example
     * // Update or create a Assessment
     * const assessment = await prisma.assessment.upsert({
     *   create: {
     *     // ... data to create a Assessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessment we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentUpsertArgs>(args: SelectSubset<T, AssessmentUpsertArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessment.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentCountArgs>(
      args?: Subset<T, AssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentAggregateArgs>(args: Subset<T, AssessmentAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAggregateType<T>>

    /**
     * Group by Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessment model
   */
  readonly fields: AssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Assessment$answersArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assessment model
   */
  interface AssessmentFieldRefs {
    readonly id: FieldRef<"Assessment", 'String'>
    readonly organizationId: FieldRef<"Assessment", 'String'>
    readonly score: FieldRef<"Assessment", 'Float'>
    readonly status: FieldRef<"Assessment", 'String'>
    readonly createdAt: FieldRef<"Assessment", 'DateTime'>
    readonly updatedAt: FieldRef<"Assessment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assessment findUnique
   */
  export type AssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findUniqueOrThrow
   */
  export type AssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findFirst
   */
  export type AssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findFirstOrThrow
   */
  export type AssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findMany
   */
  export type AssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment create
   */
  export type AssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assessment.
     */
    data: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
  }

  /**
   * Assessment createMany
   */
  export type AssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment createManyAndReturn
   */
  export type AssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessment update
   */
  export type AssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assessment.
     */
    data: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
    /**
     * Choose, which Assessment to update.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment updateMany
   */
  export type AssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
  }

  /**
   * Assessment updateManyAndReturn
   */
  export type AssessmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessment upsert
   */
  export type AssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assessment to update in case it exists.
     */
    where: AssessmentWhereUniqueInput
    /**
     * In case the Assessment found by the `where` argument doesn't exist, create a new Assessment with this data.
     */
    create: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
    /**
     * In case the Assessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
  }

  /**
   * Assessment delete
   */
  export type AssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter which Assessment to delete.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment deleteMany
   */
  export type AssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to delete.
     */
    limit?: number
  }

  /**
   * Assessment.answers
   */
  export type Assessment$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Assessment without action
   */
  export type AssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    domain: string | null
    text: string | null
    requiresDoc: boolean | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    domain: string | null
    text: string | null
    requiresDoc: boolean | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    domain: number
    text: number
    requiresDoc: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    domain?: true
    text?: true
    requiresDoc?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    domain?: true
    text?: true
    requiresDoc?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    domain?: true
    text?: true
    requiresDoc?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    domain: string
    text: string
    requiresDoc: boolean
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    text?: boolean
    requiresDoc?: boolean
    answers?: boolean | Question$answersArgs<ExtArgs>
    mappings?: boolean | Question$mappingsArgs<ExtArgs>
    remediationTask?: boolean | Question$remediationTaskArgs<ExtArgs>
    auditComments?: boolean | Question$auditCommentsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    text?: boolean
    requiresDoc?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    text?: boolean
    requiresDoc?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    domain?: boolean
    text?: boolean
    requiresDoc?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domain" | "text" | "requiresDoc", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | Question$answersArgs<ExtArgs>
    mappings?: boolean | Question$mappingsArgs<ExtArgs>
    remediationTask?: boolean | Question$remediationTaskArgs<ExtArgs>
    auditComments?: boolean | Question$auditCommentsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      mappings: Prisma.$MappingPayload<ExtArgs>[]
      remediationTask: Prisma.$RemediationTaskPayload<ExtArgs> | null
      auditComments: Prisma.$AuditCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      domain: string
      text: string
      requiresDoc: boolean
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mappings<T extends Question$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, Question$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    remediationTask<T extends Question$remediationTaskArgs<ExtArgs> = {}>(args?: Subset<T, Question$remediationTaskArgs<ExtArgs>>): Prisma__RemediationTaskClient<$Result.GetResult<Prisma.$RemediationTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    auditComments<T extends Question$auditCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Question$auditCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly domain: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly requiresDoc: FieldRef<"Question", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question.mappings
   */
  export type Question$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    where?: MappingWhereInput
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    cursor?: MappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * Question.remediationTask
   */
  export type Question$remediationTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskInclude<ExtArgs> | null
    where?: RemediationTaskWhereInput
  }

  /**
   * Question.auditComments
   */
  export type Question$auditCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentInclude<ExtArgs> | null
    where?: AuditCommentWhereInput
    orderBy?: AuditCommentOrderByWithRelationInput | AuditCommentOrderByWithRelationInput[]
    cursor?: AuditCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditCommentScalarFieldEnum | AuditCommentScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    assessmentId: string | null
    questionId: string | null
    response: string | null
    evidenceUrl: string | null
    evidenceText: string | null
    aiVerified: boolean | null
    aiReasoning: string | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    assessmentId: string | null
    questionId: string | null
    response: string | null
    evidenceUrl: string | null
    evidenceText: string | null
    aiVerified: boolean | null
    aiReasoning: string | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    assessmentId: number
    questionId: number
    response: number
    evidenceUrl: number
    evidenceText: number
    aiVerified: number
    aiReasoning: number
    verifiedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnswerMinAggregateInputType = {
    id?: true
    assessmentId?: true
    questionId?: true
    response?: true
    evidenceUrl?: true
    evidenceText?: true
    aiVerified?: true
    aiReasoning?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    assessmentId?: true
    questionId?: true
    response?: true
    evidenceUrl?: true
    evidenceText?: true
    aiVerified?: true
    aiReasoning?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    assessmentId?: true
    questionId?: true
    response?: true
    evidenceUrl?: true
    evidenceText?: true
    aiVerified?: true
    aiReasoning?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    assessmentId: string
    questionId: string
    response: string
    evidenceUrl: string | null
    evidenceText: string | null
    aiVerified: boolean | null
    aiReasoning: string | null
    verifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    questionId?: boolean
    response?: boolean
    evidenceUrl?: boolean
    evidenceText?: boolean
    aiVerified?: boolean
    aiReasoning?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    questionId?: boolean
    response?: boolean
    evidenceUrl?: boolean
    evidenceText?: boolean
    aiVerified?: boolean
    aiReasoning?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    questionId?: boolean
    response?: boolean
    evidenceUrl?: boolean
    evidenceText?: boolean
    aiVerified?: boolean
    aiReasoning?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    assessmentId?: boolean
    questionId?: boolean
    response?: boolean
    evidenceUrl?: boolean
    evidenceText?: boolean
    aiVerified?: boolean
    aiReasoning?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assessmentId" | "questionId" | "response" | "evidenceUrl" | "evidenceText" | "aiVerified" | "aiReasoning" | "verifiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      assessment: Prisma.$AssessmentPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assessmentId: string
      questionId: string
      response: string
      evidenceUrl: string | null
      evidenceText: string | null
      aiVerified: boolean | null
      aiReasoning: string | null
      verifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assessment<T extends AssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentDefaultArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly assessmentId: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly response: FieldRef<"Answer", 'String'>
    readonly evidenceUrl: FieldRef<"Answer", 'String'>
    readonly evidenceText: FieldRef<"Answer", 'String'>
    readonly aiVerified: FieldRef<"Answer", 'Boolean'>
    readonly aiReasoning: FieldRef<"Answer", 'String'>
    readonly verifiedAt: FieldRef<"Answer", 'DateTime'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model Framework
   */

  export type AggregateFramework = {
    _count: FrameworkCountAggregateOutputType | null
    _min: FrameworkMinAggregateOutputType | null
    _max: FrameworkMaxAggregateOutputType | null
  }

  export type FrameworkMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type FrameworkMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type FrameworkCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type FrameworkMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type FrameworkMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type FrameworkCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type FrameworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Framework to aggregate.
     */
    where?: FrameworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frameworks to fetch.
     */
    orderBy?: FrameworkOrderByWithRelationInput | FrameworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FrameworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frameworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frameworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Frameworks
    **/
    _count?: true | FrameworkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FrameworkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FrameworkMaxAggregateInputType
  }

  export type GetFrameworkAggregateType<T extends FrameworkAggregateArgs> = {
        [P in keyof T & keyof AggregateFramework]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFramework[P]>
      : GetScalarType<T[P], AggregateFramework[P]>
  }




  export type FrameworkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrameworkWhereInput
    orderBy?: FrameworkOrderByWithAggregationInput | FrameworkOrderByWithAggregationInput[]
    by: FrameworkScalarFieldEnum[] | FrameworkScalarFieldEnum
    having?: FrameworkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FrameworkCountAggregateInputType | true
    _min?: FrameworkMinAggregateInputType
    _max?: FrameworkMaxAggregateInputType
  }

  export type FrameworkGroupByOutputType = {
    id: string
    name: string
    description: string
    _count: FrameworkCountAggregateOutputType | null
    _min: FrameworkMinAggregateOutputType | null
    _max: FrameworkMaxAggregateOutputType | null
  }

  type GetFrameworkGroupByPayload<T extends FrameworkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FrameworkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FrameworkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FrameworkGroupByOutputType[P]>
            : GetScalarType<T[P], FrameworkGroupByOutputType[P]>
        }
      >
    >


  export type FrameworkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    mappings?: boolean | Framework$mappingsArgs<ExtArgs>
    _count?: boolean | FrameworkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["framework"]>

  export type FrameworkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["framework"]>

  export type FrameworkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["framework"]>

  export type FrameworkSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type FrameworkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["framework"]>
  export type FrameworkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | Framework$mappingsArgs<ExtArgs>
    _count?: boolean | FrameworkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FrameworkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FrameworkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FrameworkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Framework"
    objects: {
      mappings: Prisma.$MappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
    }, ExtArgs["result"]["framework"]>
    composites: {}
  }

  type FrameworkGetPayload<S extends boolean | null | undefined | FrameworkDefaultArgs> = $Result.GetResult<Prisma.$FrameworkPayload, S>

  type FrameworkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FrameworkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FrameworkCountAggregateInputType | true
    }

  export interface FrameworkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Framework'], meta: { name: 'Framework' } }
    /**
     * Find zero or one Framework that matches the filter.
     * @param {FrameworkFindUniqueArgs} args - Arguments to find a Framework
     * @example
     * // Get one Framework
     * const framework = await prisma.framework.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrameworkFindUniqueArgs>(args: SelectSubset<T, FrameworkFindUniqueArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Framework that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FrameworkFindUniqueOrThrowArgs} args - Arguments to find a Framework
     * @example
     * // Get one Framework
     * const framework = await prisma.framework.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrameworkFindUniqueOrThrowArgs>(args: SelectSubset<T, FrameworkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Framework that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkFindFirstArgs} args - Arguments to find a Framework
     * @example
     * // Get one Framework
     * const framework = await prisma.framework.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrameworkFindFirstArgs>(args?: SelectSubset<T, FrameworkFindFirstArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Framework that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkFindFirstOrThrowArgs} args - Arguments to find a Framework
     * @example
     * // Get one Framework
     * const framework = await prisma.framework.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrameworkFindFirstOrThrowArgs>(args?: SelectSubset<T, FrameworkFindFirstOrThrowArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Frameworks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Frameworks
     * const frameworks = await prisma.framework.findMany()
     * 
     * // Get first 10 Frameworks
     * const frameworks = await prisma.framework.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const frameworkWithIdOnly = await prisma.framework.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FrameworkFindManyArgs>(args?: SelectSubset<T, FrameworkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Framework.
     * @param {FrameworkCreateArgs} args - Arguments to create a Framework.
     * @example
     * // Create one Framework
     * const Framework = await prisma.framework.create({
     *   data: {
     *     // ... data to create a Framework
     *   }
     * })
     * 
     */
    create<T extends FrameworkCreateArgs>(args: SelectSubset<T, FrameworkCreateArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Frameworks.
     * @param {FrameworkCreateManyArgs} args - Arguments to create many Frameworks.
     * @example
     * // Create many Frameworks
     * const framework = await prisma.framework.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FrameworkCreateManyArgs>(args?: SelectSubset<T, FrameworkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Frameworks and returns the data saved in the database.
     * @param {FrameworkCreateManyAndReturnArgs} args - Arguments to create many Frameworks.
     * @example
     * // Create many Frameworks
     * const framework = await prisma.framework.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Frameworks and only return the `id`
     * const frameworkWithIdOnly = await prisma.framework.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FrameworkCreateManyAndReturnArgs>(args?: SelectSubset<T, FrameworkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Framework.
     * @param {FrameworkDeleteArgs} args - Arguments to delete one Framework.
     * @example
     * // Delete one Framework
     * const Framework = await prisma.framework.delete({
     *   where: {
     *     // ... filter to delete one Framework
     *   }
     * })
     * 
     */
    delete<T extends FrameworkDeleteArgs>(args: SelectSubset<T, FrameworkDeleteArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Framework.
     * @param {FrameworkUpdateArgs} args - Arguments to update one Framework.
     * @example
     * // Update one Framework
     * const framework = await prisma.framework.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FrameworkUpdateArgs>(args: SelectSubset<T, FrameworkUpdateArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Frameworks.
     * @param {FrameworkDeleteManyArgs} args - Arguments to filter Frameworks to delete.
     * @example
     * // Delete a few Frameworks
     * const { count } = await prisma.framework.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FrameworkDeleteManyArgs>(args?: SelectSubset<T, FrameworkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frameworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Frameworks
     * const framework = await prisma.framework.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FrameworkUpdateManyArgs>(args: SelectSubset<T, FrameworkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frameworks and returns the data updated in the database.
     * @param {FrameworkUpdateManyAndReturnArgs} args - Arguments to update many Frameworks.
     * @example
     * // Update many Frameworks
     * const framework = await prisma.framework.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Frameworks and only return the `id`
     * const frameworkWithIdOnly = await prisma.framework.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FrameworkUpdateManyAndReturnArgs>(args: SelectSubset<T, FrameworkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Framework.
     * @param {FrameworkUpsertArgs} args - Arguments to update or create a Framework.
     * @example
     * // Update or create a Framework
     * const framework = await prisma.framework.upsert({
     *   create: {
     *     // ... data to create a Framework
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Framework we want to update
     *   }
     * })
     */
    upsert<T extends FrameworkUpsertArgs>(args: SelectSubset<T, FrameworkUpsertArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Frameworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkCountArgs} args - Arguments to filter Frameworks to count.
     * @example
     * // Count the number of Frameworks
     * const count = await prisma.framework.count({
     *   where: {
     *     // ... the filter for the Frameworks we want to count
     *   }
     * })
    **/
    count<T extends FrameworkCountArgs>(
      args?: Subset<T, FrameworkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FrameworkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Framework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FrameworkAggregateArgs>(args: Subset<T, FrameworkAggregateArgs>): Prisma.PrismaPromise<GetFrameworkAggregateType<T>>

    /**
     * Group by Framework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FrameworkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FrameworkGroupByArgs['orderBy'] }
        : { orderBy?: FrameworkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FrameworkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrameworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Framework model
   */
  readonly fields: FrameworkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Framework.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FrameworkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mappings<T extends Framework$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, Framework$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Framework model
   */
  interface FrameworkFieldRefs {
    readonly id: FieldRef<"Framework", 'String'>
    readonly name: FieldRef<"Framework", 'String'>
    readonly description: FieldRef<"Framework", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Framework findUnique
   */
  export type FrameworkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Framework
     */
    omit?: FrameworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * Filter, which Framework to fetch.
     */
    where: FrameworkWhereUniqueInput
  }

  /**
   * Framework findUniqueOrThrow
   */
  export type FrameworkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Framework
     */
    omit?: FrameworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * Filter, which Framework to fetch.
     */
    where: FrameworkWhereUniqueInput
  }

  /**
   * Framework findFirst
   */
  export type FrameworkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Framework
     */
    omit?: FrameworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * Filter, which Framework to fetch.
     */
    where?: FrameworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frameworks to fetch.
     */
    orderBy?: FrameworkOrderByWithRelationInput | FrameworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frameworks.
     */
    cursor?: FrameworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frameworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frameworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frameworks.
     */
    distinct?: FrameworkScalarFieldEnum | FrameworkScalarFieldEnum[]
  }

  /**
   * Framework findFirstOrThrow
   */
  export type FrameworkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Framework
     */
    omit?: FrameworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * Filter, which Framework to fetch.
     */
    where?: FrameworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frameworks to fetch.
     */
    orderBy?: FrameworkOrderByWithRelationInput | FrameworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frameworks.
     */
    cursor?: FrameworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frameworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frameworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frameworks.
     */
    distinct?: FrameworkScalarFieldEnum | FrameworkScalarFieldEnum[]
  }

  /**
   * Framework findMany
   */
  export type FrameworkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Framework
     */
    omit?: FrameworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * Filter, which Frameworks to fetch.
     */
    where?: FrameworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frameworks to fetch.
     */
    orderBy?: FrameworkOrderByWithRelationInput | FrameworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Frameworks.
     */
    cursor?: FrameworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frameworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frameworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frameworks.
     */
    distinct?: FrameworkScalarFieldEnum | FrameworkScalarFieldEnum[]
  }

  /**
   * Framework create
   */
  export type FrameworkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Framework
     */
    omit?: FrameworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * The data needed to create a Framework.
     */
    data: XOR<FrameworkCreateInput, FrameworkUncheckedCreateInput>
  }

  /**
   * Framework createMany
   */
  export type FrameworkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Frameworks.
     */
    data: FrameworkCreateManyInput | FrameworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Framework createManyAndReturn
   */
  export type FrameworkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Framework
     */
    omit?: FrameworkOmit<ExtArgs> | null
    /**
     * The data used to create many Frameworks.
     */
    data: FrameworkCreateManyInput | FrameworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Framework update
   */
  export type FrameworkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Framework
     */
    omit?: FrameworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * The data needed to update a Framework.
     */
    data: XOR<FrameworkUpdateInput, FrameworkUncheckedUpdateInput>
    /**
     * Choose, which Framework to update.
     */
    where: FrameworkWhereUniqueInput
  }

  /**
   * Framework updateMany
   */
  export type FrameworkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Frameworks.
     */
    data: XOR<FrameworkUpdateManyMutationInput, FrameworkUncheckedUpdateManyInput>
    /**
     * Filter which Frameworks to update
     */
    where?: FrameworkWhereInput
    /**
     * Limit how many Frameworks to update.
     */
    limit?: number
  }

  /**
   * Framework updateManyAndReturn
   */
  export type FrameworkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Framework
     */
    omit?: FrameworkOmit<ExtArgs> | null
    /**
     * The data used to update Frameworks.
     */
    data: XOR<FrameworkUpdateManyMutationInput, FrameworkUncheckedUpdateManyInput>
    /**
     * Filter which Frameworks to update
     */
    where?: FrameworkWhereInput
    /**
     * Limit how many Frameworks to update.
     */
    limit?: number
  }

  /**
   * Framework upsert
   */
  export type FrameworkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Framework
     */
    omit?: FrameworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * The filter to search for the Framework to update in case it exists.
     */
    where: FrameworkWhereUniqueInput
    /**
     * In case the Framework found by the `where` argument doesn't exist, create a new Framework with this data.
     */
    create: XOR<FrameworkCreateInput, FrameworkUncheckedCreateInput>
    /**
     * In case the Framework was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FrameworkUpdateInput, FrameworkUncheckedUpdateInput>
  }

  /**
   * Framework delete
   */
  export type FrameworkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Framework
     */
    omit?: FrameworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * Filter which Framework to delete.
     */
    where: FrameworkWhereUniqueInput
  }

  /**
   * Framework deleteMany
   */
  export type FrameworkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frameworks to delete
     */
    where?: FrameworkWhereInput
    /**
     * Limit how many Frameworks to delete.
     */
    limit?: number
  }

  /**
   * Framework.mappings
   */
  export type Framework$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    where?: MappingWhereInput
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    cursor?: MappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * Framework without action
   */
  export type FrameworkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Framework
     */
    omit?: FrameworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
  }


  /**
   * Model Mapping
   */

  export type AggregateMapping = {
    _count: MappingCountAggregateOutputType | null
    _min: MappingMinAggregateOutputType | null
    _max: MappingMaxAggregateOutputType | null
  }

  export type MappingMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    frameworkId: string | null
    clause: string | null
    description: string | null
  }

  export type MappingMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    frameworkId: string | null
    clause: string | null
    description: string | null
  }

  export type MappingCountAggregateOutputType = {
    id: number
    questionId: number
    frameworkId: number
    clause: number
    description: number
    _all: number
  }


  export type MappingMinAggregateInputType = {
    id?: true
    questionId?: true
    frameworkId?: true
    clause?: true
    description?: true
  }

  export type MappingMaxAggregateInputType = {
    id?: true
    questionId?: true
    frameworkId?: true
    clause?: true
    description?: true
  }

  export type MappingCountAggregateInputType = {
    id?: true
    questionId?: true
    frameworkId?: true
    clause?: true
    description?: true
    _all?: true
  }

  export type MappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mapping to aggregate.
     */
    where?: MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mappings to fetch.
     */
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mappings
    **/
    _count?: true | MappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MappingMaxAggregateInputType
  }

  export type GetMappingAggregateType<T extends MappingAggregateArgs> = {
        [P in keyof T & keyof AggregateMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapping[P]>
      : GetScalarType<T[P], AggregateMapping[P]>
  }




  export type MappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MappingWhereInput
    orderBy?: MappingOrderByWithAggregationInput | MappingOrderByWithAggregationInput[]
    by: MappingScalarFieldEnum[] | MappingScalarFieldEnum
    having?: MappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MappingCountAggregateInputType | true
    _min?: MappingMinAggregateInputType
    _max?: MappingMaxAggregateInputType
  }

  export type MappingGroupByOutputType = {
    id: string
    questionId: string
    frameworkId: string
    clause: string
    description: string
    _count: MappingCountAggregateOutputType | null
    _min: MappingMinAggregateOutputType | null
    _max: MappingMaxAggregateOutputType | null
  }

  type GetMappingGroupByPayload<T extends MappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MappingGroupByOutputType[P]>
            : GetScalarType<T[P], MappingGroupByOutputType[P]>
        }
      >
    >


  export type MappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    frameworkId?: boolean
    clause?: boolean
    description?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    framework?: boolean | FrameworkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapping"]>

  export type MappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    frameworkId?: boolean
    clause?: boolean
    description?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    framework?: boolean | FrameworkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapping"]>

  export type MappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    frameworkId?: boolean
    clause?: boolean
    description?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    framework?: boolean | FrameworkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapping"]>

  export type MappingSelectScalar = {
    id?: boolean
    questionId?: boolean
    frameworkId?: boolean
    clause?: boolean
    description?: boolean
  }

  export type MappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "frameworkId" | "clause" | "description", ExtArgs["result"]["mapping"]>
  export type MappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    framework?: boolean | FrameworkDefaultArgs<ExtArgs>
  }
  export type MappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    framework?: boolean | FrameworkDefaultArgs<ExtArgs>
  }
  export type MappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    framework?: boolean | FrameworkDefaultArgs<ExtArgs>
  }

  export type $MappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mapping"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      framework: Prisma.$FrameworkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      frameworkId: string
      clause: string
      description: string
    }, ExtArgs["result"]["mapping"]>
    composites: {}
  }

  type MappingGetPayload<S extends boolean | null | undefined | MappingDefaultArgs> = $Result.GetResult<Prisma.$MappingPayload, S>

  type MappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MappingCountAggregateInputType | true
    }

  export interface MappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mapping'], meta: { name: 'Mapping' } }
    /**
     * Find zero or one Mapping that matches the filter.
     * @param {MappingFindUniqueArgs} args - Arguments to find a Mapping
     * @example
     * // Get one Mapping
     * const mapping = await prisma.mapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MappingFindUniqueArgs>(args: SelectSubset<T, MappingFindUniqueArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MappingFindUniqueOrThrowArgs} args - Arguments to find a Mapping
     * @example
     * // Get one Mapping
     * const mapping = await prisma.mapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MappingFindUniqueOrThrowArgs>(args: SelectSubset<T, MappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingFindFirstArgs} args - Arguments to find a Mapping
     * @example
     * // Get one Mapping
     * const mapping = await prisma.mapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MappingFindFirstArgs>(args?: SelectSubset<T, MappingFindFirstArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingFindFirstOrThrowArgs} args - Arguments to find a Mapping
     * @example
     * // Get one Mapping
     * const mapping = await prisma.mapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MappingFindFirstOrThrowArgs>(args?: SelectSubset<T, MappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mappings
     * const mappings = await prisma.mapping.findMany()
     * 
     * // Get first 10 Mappings
     * const mappings = await prisma.mapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mappingWithIdOnly = await prisma.mapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MappingFindManyArgs>(args?: SelectSubset<T, MappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mapping.
     * @param {MappingCreateArgs} args - Arguments to create a Mapping.
     * @example
     * // Create one Mapping
     * const Mapping = await prisma.mapping.create({
     *   data: {
     *     // ... data to create a Mapping
     *   }
     * })
     * 
     */
    create<T extends MappingCreateArgs>(args: SelectSubset<T, MappingCreateArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mappings.
     * @param {MappingCreateManyArgs} args - Arguments to create many Mappings.
     * @example
     * // Create many Mappings
     * const mapping = await prisma.mapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MappingCreateManyArgs>(args?: SelectSubset<T, MappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mappings and returns the data saved in the database.
     * @param {MappingCreateManyAndReturnArgs} args - Arguments to create many Mappings.
     * @example
     * // Create many Mappings
     * const mapping = await prisma.mapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mappings and only return the `id`
     * const mappingWithIdOnly = await prisma.mapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MappingCreateManyAndReturnArgs>(args?: SelectSubset<T, MappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mapping.
     * @param {MappingDeleteArgs} args - Arguments to delete one Mapping.
     * @example
     * // Delete one Mapping
     * const Mapping = await prisma.mapping.delete({
     *   where: {
     *     // ... filter to delete one Mapping
     *   }
     * })
     * 
     */
    delete<T extends MappingDeleteArgs>(args: SelectSubset<T, MappingDeleteArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mapping.
     * @param {MappingUpdateArgs} args - Arguments to update one Mapping.
     * @example
     * // Update one Mapping
     * const mapping = await prisma.mapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MappingUpdateArgs>(args: SelectSubset<T, MappingUpdateArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mappings.
     * @param {MappingDeleteManyArgs} args - Arguments to filter Mappings to delete.
     * @example
     * // Delete a few Mappings
     * const { count } = await prisma.mapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MappingDeleteManyArgs>(args?: SelectSubset<T, MappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mappings
     * const mapping = await prisma.mapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MappingUpdateManyArgs>(args: SelectSubset<T, MappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mappings and returns the data updated in the database.
     * @param {MappingUpdateManyAndReturnArgs} args - Arguments to update many Mappings.
     * @example
     * // Update many Mappings
     * const mapping = await prisma.mapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mappings and only return the `id`
     * const mappingWithIdOnly = await prisma.mapping.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MappingUpdateManyAndReturnArgs>(args: SelectSubset<T, MappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mapping.
     * @param {MappingUpsertArgs} args - Arguments to update or create a Mapping.
     * @example
     * // Update or create a Mapping
     * const mapping = await prisma.mapping.upsert({
     *   create: {
     *     // ... data to create a Mapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mapping we want to update
     *   }
     * })
     */
    upsert<T extends MappingUpsertArgs>(args: SelectSubset<T, MappingUpsertArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingCountArgs} args - Arguments to filter Mappings to count.
     * @example
     * // Count the number of Mappings
     * const count = await prisma.mapping.count({
     *   where: {
     *     // ... the filter for the Mappings we want to count
     *   }
     * })
    **/
    count<T extends MappingCountArgs>(
      args?: Subset<T, MappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MappingAggregateArgs>(args: Subset<T, MappingAggregateArgs>): Prisma.PrismaPromise<GetMappingAggregateType<T>>

    /**
     * Group by Mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MappingGroupByArgs['orderBy'] }
        : { orderBy?: MappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mapping model
   */
  readonly fields: MappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    framework<T extends FrameworkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FrameworkDefaultArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mapping model
   */
  interface MappingFieldRefs {
    readonly id: FieldRef<"Mapping", 'String'>
    readonly questionId: FieldRef<"Mapping", 'String'>
    readonly frameworkId: FieldRef<"Mapping", 'String'>
    readonly clause: FieldRef<"Mapping", 'String'>
    readonly description: FieldRef<"Mapping", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mapping findUnique
   */
  export type MappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * Filter, which Mapping to fetch.
     */
    where: MappingWhereUniqueInput
  }

  /**
   * Mapping findUniqueOrThrow
   */
  export type MappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * Filter, which Mapping to fetch.
     */
    where: MappingWhereUniqueInput
  }

  /**
   * Mapping findFirst
   */
  export type MappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * Filter, which Mapping to fetch.
     */
    where?: MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mappings to fetch.
     */
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mappings.
     */
    cursor?: MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mappings.
     */
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * Mapping findFirstOrThrow
   */
  export type MappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * Filter, which Mapping to fetch.
     */
    where?: MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mappings to fetch.
     */
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mappings.
     */
    cursor?: MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mappings.
     */
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * Mapping findMany
   */
  export type MappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * Filter, which Mappings to fetch.
     */
    where?: MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mappings to fetch.
     */
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mappings.
     */
    cursor?: MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mappings.
     */
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * Mapping create
   */
  export type MappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * The data needed to create a Mapping.
     */
    data: XOR<MappingCreateInput, MappingUncheckedCreateInput>
  }

  /**
   * Mapping createMany
   */
  export type MappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mappings.
     */
    data: MappingCreateManyInput | MappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mapping createManyAndReturn
   */
  export type MappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * The data used to create many Mappings.
     */
    data: MappingCreateManyInput | MappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mapping update
   */
  export type MappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * The data needed to update a Mapping.
     */
    data: XOR<MappingUpdateInput, MappingUncheckedUpdateInput>
    /**
     * Choose, which Mapping to update.
     */
    where: MappingWhereUniqueInput
  }

  /**
   * Mapping updateMany
   */
  export type MappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mappings.
     */
    data: XOR<MappingUpdateManyMutationInput, MappingUncheckedUpdateManyInput>
    /**
     * Filter which Mappings to update
     */
    where?: MappingWhereInput
    /**
     * Limit how many Mappings to update.
     */
    limit?: number
  }

  /**
   * Mapping updateManyAndReturn
   */
  export type MappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * The data used to update Mappings.
     */
    data: XOR<MappingUpdateManyMutationInput, MappingUncheckedUpdateManyInput>
    /**
     * Filter which Mappings to update
     */
    where?: MappingWhereInput
    /**
     * Limit how many Mappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mapping upsert
   */
  export type MappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * The filter to search for the Mapping to update in case it exists.
     */
    where: MappingWhereUniqueInput
    /**
     * In case the Mapping found by the `where` argument doesn't exist, create a new Mapping with this data.
     */
    create: XOR<MappingCreateInput, MappingUncheckedCreateInput>
    /**
     * In case the Mapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MappingUpdateInput, MappingUncheckedUpdateInput>
  }

  /**
   * Mapping delete
   */
  export type MappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * Filter which Mapping to delete.
     */
    where: MappingWhereUniqueInput
  }

  /**
   * Mapping deleteMany
   */
  export type MappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mappings to delete
     */
    where?: MappingWhereInput
    /**
     * Limit how many Mappings to delete.
     */
    limit?: number
  }

  /**
   * Mapping without action
   */
  export type MappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
  }


  /**
   * Model PolicyDocument
   */

  export type AggregatePolicyDocument = {
    _count: PolicyDocumentCountAggregateOutputType | null
    _min: PolicyDocumentMinAggregateOutputType | null
    _max: PolicyDocumentMaxAggregateOutputType | null
  }

  export type PolicyDocumentMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyDocumentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyDocumentCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PolicyDocumentMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyDocumentMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyDocumentCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PolicyDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicyDocument to aggregate.
     */
    where?: PolicyDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyDocuments to fetch.
     */
    orderBy?: PolicyDocumentOrderByWithRelationInput | PolicyDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PolicyDocuments
    **/
    _count?: true | PolicyDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyDocumentMaxAggregateInputType
  }

  export type GetPolicyDocumentAggregateType<T extends PolicyDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicyDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicyDocument[P]>
      : GetScalarType<T[P], AggregatePolicyDocument[P]>
  }




  export type PolicyDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyDocumentWhereInput
    orderBy?: PolicyDocumentOrderByWithAggregationInput | PolicyDocumentOrderByWithAggregationInput[]
    by: PolicyDocumentScalarFieldEnum[] | PolicyDocumentScalarFieldEnum
    having?: PolicyDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyDocumentCountAggregateInputType | true
    _min?: PolicyDocumentMinAggregateInputType
    _max?: PolicyDocumentMaxAggregateInputType
  }

  export type PolicyDocumentGroupByOutputType = {
    id: string
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: PolicyDocumentCountAggregateOutputType | null
    _min: PolicyDocumentMinAggregateOutputType | null
    _max: PolicyDocumentMaxAggregateOutputType | null
  }

  type GetPolicyDocumentGroupByPayload<T extends PolicyDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyDocumentGroupByOutputType[P]>
        }
      >
    >


  export type PolicyDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policyDocument"]>

  export type PolicyDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policyDocument"]>

  export type PolicyDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policyDocument"]>

  export type PolicyDocumentSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PolicyDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["policyDocument"]>

  export type $PolicyDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PolicyDocument"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["policyDocument"]>
    composites: {}
  }

  type PolicyDocumentGetPayload<S extends boolean | null | undefined | PolicyDocumentDefaultArgs> = $Result.GetResult<Prisma.$PolicyDocumentPayload, S>

  type PolicyDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolicyDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolicyDocumentCountAggregateInputType | true
    }

  export interface PolicyDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PolicyDocument'], meta: { name: 'PolicyDocument' } }
    /**
     * Find zero or one PolicyDocument that matches the filter.
     * @param {PolicyDocumentFindUniqueArgs} args - Arguments to find a PolicyDocument
     * @example
     * // Get one PolicyDocument
     * const policyDocument = await prisma.policyDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyDocumentFindUniqueArgs>(args: SelectSubset<T, PolicyDocumentFindUniqueArgs<ExtArgs>>): Prisma__PolicyDocumentClient<$Result.GetResult<Prisma.$PolicyDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PolicyDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolicyDocumentFindUniqueOrThrowArgs} args - Arguments to find a PolicyDocument
     * @example
     * // Get one PolicyDocument
     * const policyDocument = await prisma.policyDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyDocumentClient<$Result.GetResult<Prisma.$PolicyDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PolicyDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDocumentFindFirstArgs} args - Arguments to find a PolicyDocument
     * @example
     * // Get one PolicyDocument
     * const policyDocument = await prisma.policyDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyDocumentFindFirstArgs>(args?: SelectSubset<T, PolicyDocumentFindFirstArgs<ExtArgs>>): Prisma__PolicyDocumentClient<$Result.GetResult<Prisma.$PolicyDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PolicyDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDocumentFindFirstOrThrowArgs} args - Arguments to find a PolicyDocument
     * @example
     * // Get one PolicyDocument
     * const policyDocument = await prisma.policyDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyDocumentClient<$Result.GetResult<Prisma.$PolicyDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PolicyDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PolicyDocuments
     * const policyDocuments = await prisma.policyDocument.findMany()
     * 
     * // Get first 10 PolicyDocuments
     * const policyDocuments = await prisma.policyDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyDocumentWithIdOnly = await prisma.policyDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyDocumentFindManyArgs>(args?: SelectSubset<T, PolicyDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PolicyDocument.
     * @param {PolicyDocumentCreateArgs} args - Arguments to create a PolicyDocument.
     * @example
     * // Create one PolicyDocument
     * const PolicyDocument = await prisma.policyDocument.create({
     *   data: {
     *     // ... data to create a PolicyDocument
     *   }
     * })
     * 
     */
    create<T extends PolicyDocumentCreateArgs>(args: SelectSubset<T, PolicyDocumentCreateArgs<ExtArgs>>): Prisma__PolicyDocumentClient<$Result.GetResult<Prisma.$PolicyDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PolicyDocuments.
     * @param {PolicyDocumentCreateManyArgs} args - Arguments to create many PolicyDocuments.
     * @example
     * // Create many PolicyDocuments
     * const policyDocument = await prisma.policyDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyDocumentCreateManyArgs>(args?: SelectSubset<T, PolicyDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PolicyDocuments and returns the data saved in the database.
     * @param {PolicyDocumentCreateManyAndReturnArgs} args - Arguments to create many PolicyDocuments.
     * @example
     * // Create many PolicyDocuments
     * const policyDocument = await prisma.policyDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PolicyDocuments and only return the `id`
     * const policyDocumentWithIdOnly = await prisma.policyDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PolicyDocument.
     * @param {PolicyDocumentDeleteArgs} args - Arguments to delete one PolicyDocument.
     * @example
     * // Delete one PolicyDocument
     * const PolicyDocument = await prisma.policyDocument.delete({
     *   where: {
     *     // ... filter to delete one PolicyDocument
     *   }
     * })
     * 
     */
    delete<T extends PolicyDocumentDeleteArgs>(args: SelectSubset<T, PolicyDocumentDeleteArgs<ExtArgs>>): Prisma__PolicyDocumentClient<$Result.GetResult<Prisma.$PolicyDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PolicyDocument.
     * @param {PolicyDocumentUpdateArgs} args - Arguments to update one PolicyDocument.
     * @example
     * // Update one PolicyDocument
     * const policyDocument = await prisma.policyDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyDocumentUpdateArgs>(args: SelectSubset<T, PolicyDocumentUpdateArgs<ExtArgs>>): Prisma__PolicyDocumentClient<$Result.GetResult<Prisma.$PolicyDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PolicyDocuments.
     * @param {PolicyDocumentDeleteManyArgs} args - Arguments to filter PolicyDocuments to delete.
     * @example
     * // Delete a few PolicyDocuments
     * const { count } = await prisma.policyDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyDocumentDeleteManyArgs>(args?: SelectSubset<T, PolicyDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolicyDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PolicyDocuments
     * const policyDocument = await prisma.policyDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyDocumentUpdateManyArgs>(args: SelectSubset<T, PolicyDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolicyDocuments and returns the data updated in the database.
     * @param {PolicyDocumentUpdateManyAndReturnArgs} args - Arguments to update many PolicyDocuments.
     * @example
     * // Update many PolicyDocuments
     * const policyDocument = await prisma.policyDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PolicyDocuments and only return the `id`
     * const policyDocumentWithIdOnly = await prisma.policyDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PolicyDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, PolicyDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PolicyDocument.
     * @param {PolicyDocumentUpsertArgs} args - Arguments to update or create a PolicyDocument.
     * @example
     * // Update or create a PolicyDocument
     * const policyDocument = await prisma.policyDocument.upsert({
     *   create: {
     *     // ... data to create a PolicyDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PolicyDocument we want to update
     *   }
     * })
     */
    upsert<T extends PolicyDocumentUpsertArgs>(args: SelectSubset<T, PolicyDocumentUpsertArgs<ExtArgs>>): Prisma__PolicyDocumentClient<$Result.GetResult<Prisma.$PolicyDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PolicyDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDocumentCountArgs} args - Arguments to filter PolicyDocuments to count.
     * @example
     * // Count the number of PolicyDocuments
     * const count = await prisma.policyDocument.count({
     *   where: {
     *     // ... the filter for the PolicyDocuments we want to count
     *   }
     * })
    **/
    count<T extends PolicyDocumentCountArgs>(
      args?: Subset<T, PolicyDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PolicyDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolicyDocumentAggregateArgs>(args: Subset<T, PolicyDocumentAggregateArgs>): Prisma.PrismaPromise<GetPolicyDocumentAggregateType<T>>

    /**
     * Group by PolicyDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolicyDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyDocumentGroupByArgs['orderBy'] }
        : { orderBy?: PolicyDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolicyDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PolicyDocument model
   */
  readonly fields: PolicyDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PolicyDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PolicyDocument model
   */
  interface PolicyDocumentFieldRefs {
    readonly id: FieldRef<"PolicyDocument", 'String'>
    readonly title: FieldRef<"PolicyDocument", 'String'>
    readonly content: FieldRef<"PolicyDocument", 'String'>
    readonly createdAt: FieldRef<"PolicyDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"PolicyDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PolicyDocument findUnique
   */
  export type PolicyDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyDocument
     */
    select?: PolicyDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyDocument
     */
    omit?: PolicyDocumentOmit<ExtArgs> | null
    /**
     * Filter, which PolicyDocument to fetch.
     */
    where: PolicyDocumentWhereUniqueInput
  }

  /**
   * PolicyDocument findUniqueOrThrow
   */
  export type PolicyDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyDocument
     */
    select?: PolicyDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyDocument
     */
    omit?: PolicyDocumentOmit<ExtArgs> | null
    /**
     * Filter, which PolicyDocument to fetch.
     */
    where: PolicyDocumentWhereUniqueInput
  }

  /**
   * PolicyDocument findFirst
   */
  export type PolicyDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyDocument
     */
    select?: PolicyDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyDocument
     */
    omit?: PolicyDocumentOmit<ExtArgs> | null
    /**
     * Filter, which PolicyDocument to fetch.
     */
    where?: PolicyDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyDocuments to fetch.
     */
    orderBy?: PolicyDocumentOrderByWithRelationInput | PolicyDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyDocuments.
     */
    cursor?: PolicyDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyDocuments.
     */
    distinct?: PolicyDocumentScalarFieldEnum | PolicyDocumentScalarFieldEnum[]
  }

  /**
   * PolicyDocument findFirstOrThrow
   */
  export type PolicyDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyDocument
     */
    select?: PolicyDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyDocument
     */
    omit?: PolicyDocumentOmit<ExtArgs> | null
    /**
     * Filter, which PolicyDocument to fetch.
     */
    where?: PolicyDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyDocuments to fetch.
     */
    orderBy?: PolicyDocumentOrderByWithRelationInput | PolicyDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyDocuments.
     */
    cursor?: PolicyDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyDocuments.
     */
    distinct?: PolicyDocumentScalarFieldEnum | PolicyDocumentScalarFieldEnum[]
  }

  /**
   * PolicyDocument findMany
   */
  export type PolicyDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyDocument
     */
    select?: PolicyDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyDocument
     */
    omit?: PolicyDocumentOmit<ExtArgs> | null
    /**
     * Filter, which PolicyDocuments to fetch.
     */
    where?: PolicyDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyDocuments to fetch.
     */
    orderBy?: PolicyDocumentOrderByWithRelationInput | PolicyDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PolicyDocuments.
     */
    cursor?: PolicyDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyDocuments.
     */
    distinct?: PolicyDocumentScalarFieldEnum | PolicyDocumentScalarFieldEnum[]
  }

  /**
   * PolicyDocument create
   */
  export type PolicyDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyDocument
     */
    select?: PolicyDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyDocument
     */
    omit?: PolicyDocumentOmit<ExtArgs> | null
    /**
     * The data needed to create a PolicyDocument.
     */
    data: XOR<PolicyDocumentCreateInput, PolicyDocumentUncheckedCreateInput>
  }

  /**
   * PolicyDocument createMany
   */
  export type PolicyDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PolicyDocuments.
     */
    data: PolicyDocumentCreateManyInput | PolicyDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PolicyDocument createManyAndReturn
   */
  export type PolicyDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyDocument
     */
    select?: PolicyDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyDocument
     */
    omit?: PolicyDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many PolicyDocuments.
     */
    data: PolicyDocumentCreateManyInput | PolicyDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PolicyDocument update
   */
  export type PolicyDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyDocument
     */
    select?: PolicyDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyDocument
     */
    omit?: PolicyDocumentOmit<ExtArgs> | null
    /**
     * The data needed to update a PolicyDocument.
     */
    data: XOR<PolicyDocumentUpdateInput, PolicyDocumentUncheckedUpdateInput>
    /**
     * Choose, which PolicyDocument to update.
     */
    where: PolicyDocumentWhereUniqueInput
  }

  /**
   * PolicyDocument updateMany
   */
  export type PolicyDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PolicyDocuments.
     */
    data: XOR<PolicyDocumentUpdateManyMutationInput, PolicyDocumentUncheckedUpdateManyInput>
    /**
     * Filter which PolicyDocuments to update
     */
    where?: PolicyDocumentWhereInput
    /**
     * Limit how many PolicyDocuments to update.
     */
    limit?: number
  }

  /**
   * PolicyDocument updateManyAndReturn
   */
  export type PolicyDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyDocument
     */
    select?: PolicyDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyDocument
     */
    omit?: PolicyDocumentOmit<ExtArgs> | null
    /**
     * The data used to update PolicyDocuments.
     */
    data: XOR<PolicyDocumentUpdateManyMutationInput, PolicyDocumentUncheckedUpdateManyInput>
    /**
     * Filter which PolicyDocuments to update
     */
    where?: PolicyDocumentWhereInput
    /**
     * Limit how many PolicyDocuments to update.
     */
    limit?: number
  }

  /**
   * PolicyDocument upsert
   */
  export type PolicyDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyDocument
     */
    select?: PolicyDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyDocument
     */
    omit?: PolicyDocumentOmit<ExtArgs> | null
    /**
     * The filter to search for the PolicyDocument to update in case it exists.
     */
    where: PolicyDocumentWhereUniqueInput
    /**
     * In case the PolicyDocument found by the `where` argument doesn't exist, create a new PolicyDocument with this data.
     */
    create: XOR<PolicyDocumentCreateInput, PolicyDocumentUncheckedCreateInput>
    /**
     * In case the PolicyDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyDocumentUpdateInput, PolicyDocumentUncheckedUpdateInput>
  }

  /**
   * PolicyDocument delete
   */
  export type PolicyDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyDocument
     */
    select?: PolicyDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyDocument
     */
    omit?: PolicyDocumentOmit<ExtArgs> | null
    /**
     * Filter which PolicyDocument to delete.
     */
    where: PolicyDocumentWhereUniqueInput
  }

  /**
   * PolicyDocument deleteMany
   */
  export type PolicyDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicyDocuments to delete
     */
    where?: PolicyDocumentWhereInput
    /**
     * Limit how many PolicyDocuments to delete.
     */
    limit?: number
  }

  /**
   * PolicyDocument without action
   */
  export type PolicyDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyDocument
     */
    select?: PolicyDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyDocument
     */
    omit?: PolicyDocumentOmit<ExtArgs> | null
  }


  /**
   * Model RemediationTask
   */

  export type AggregateRemediationTask = {
    _count: RemediationTaskCountAggregateOutputType | null
    _min: RemediationTaskMinAggregateOutputType | null
    _max: RemediationTaskMaxAggregateOutputType | null
  }

  export type RemediationTaskMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    assignedTo: string | null
    dueDate: Date | null
    status: string | null
    priority: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemediationTaskMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    assignedTo: string | null
    dueDate: Date | null
    status: string | null
    priority: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemediationTaskCountAggregateOutputType = {
    id: number
    questionId: number
    assignedTo: number
    dueDate: number
    status: number
    priority: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RemediationTaskMinAggregateInputType = {
    id?: true
    questionId?: true
    assignedTo?: true
    dueDate?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemediationTaskMaxAggregateInputType = {
    id?: true
    questionId?: true
    assignedTo?: true
    dueDate?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemediationTaskCountAggregateInputType = {
    id?: true
    questionId?: true
    assignedTo?: true
    dueDate?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RemediationTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemediationTask to aggregate.
     */
    where?: RemediationTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemediationTasks to fetch.
     */
    orderBy?: RemediationTaskOrderByWithRelationInput | RemediationTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RemediationTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemediationTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemediationTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RemediationTasks
    **/
    _count?: true | RemediationTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemediationTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemediationTaskMaxAggregateInputType
  }

  export type GetRemediationTaskAggregateType<T extends RemediationTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateRemediationTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRemediationTask[P]>
      : GetScalarType<T[P], AggregateRemediationTask[P]>
  }




  export type RemediationTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemediationTaskWhereInput
    orderBy?: RemediationTaskOrderByWithAggregationInput | RemediationTaskOrderByWithAggregationInput[]
    by: RemediationTaskScalarFieldEnum[] | RemediationTaskScalarFieldEnum
    having?: RemediationTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemediationTaskCountAggregateInputType | true
    _min?: RemediationTaskMinAggregateInputType
    _max?: RemediationTaskMaxAggregateInputType
  }

  export type RemediationTaskGroupByOutputType = {
    id: string
    questionId: string
    assignedTo: string | null
    dueDate: Date | null
    status: string
    priority: string
    createdAt: Date
    updatedAt: Date
    _count: RemediationTaskCountAggregateOutputType | null
    _min: RemediationTaskMinAggregateOutputType | null
    _max: RemediationTaskMaxAggregateOutputType | null
  }

  type GetRemediationTaskGroupByPayload<T extends RemediationTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemediationTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemediationTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemediationTaskGroupByOutputType[P]>
            : GetScalarType<T[P], RemediationTaskGroupByOutputType[P]>
        }
      >
    >


  export type RemediationTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    assignedTo?: boolean
    dueDate?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["remediationTask"]>

  export type RemediationTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    assignedTo?: boolean
    dueDate?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["remediationTask"]>

  export type RemediationTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    assignedTo?: boolean
    dueDate?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["remediationTask"]>

  export type RemediationTaskSelectScalar = {
    id?: boolean
    questionId?: boolean
    assignedTo?: boolean
    dueDate?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RemediationTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "assignedTo" | "dueDate" | "status" | "priority" | "createdAt" | "updatedAt", ExtArgs["result"]["remediationTask"]>
  export type RemediationTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type RemediationTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type RemediationTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $RemediationTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RemediationTask"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      assignedTo: string | null
      dueDate: Date | null
      status: string
      priority: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["remediationTask"]>
    composites: {}
  }

  type RemediationTaskGetPayload<S extends boolean | null | undefined | RemediationTaskDefaultArgs> = $Result.GetResult<Prisma.$RemediationTaskPayload, S>

  type RemediationTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RemediationTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemediationTaskCountAggregateInputType | true
    }

  export interface RemediationTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RemediationTask'], meta: { name: 'RemediationTask' } }
    /**
     * Find zero or one RemediationTask that matches the filter.
     * @param {RemediationTaskFindUniqueArgs} args - Arguments to find a RemediationTask
     * @example
     * // Get one RemediationTask
     * const remediationTask = await prisma.remediationTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RemediationTaskFindUniqueArgs>(args: SelectSubset<T, RemediationTaskFindUniqueArgs<ExtArgs>>): Prisma__RemediationTaskClient<$Result.GetResult<Prisma.$RemediationTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RemediationTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RemediationTaskFindUniqueOrThrowArgs} args - Arguments to find a RemediationTask
     * @example
     * // Get one RemediationTask
     * const remediationTask = await prisma.remediationTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RemediationTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, RemediationTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RemediationTaskClient<$Result.GetResult<Prisma.$RemediationTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemediationTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemediationTaskFindFirstArgs} args - Arguments to find a RemediationTask
     * @example
     * // Get one RemediationTask
     * const remediationTask = await prisma.remediationTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RemediationTaskFindFirstArgs>(args?: SelectSubset<T, RemediationTaskFindFirstArgs<ExtArgs>>): Prisma__RemediationTaskClient<$Result.GetResult<Prisma.$RemediationTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemediationTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemediationTaskFindFirstOrThrowArgs} args - Arguments to find a RemediationTask
     * @example
     * // Get one RemediationTask
     * const remediationTask = await prisma.remediationTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RemediationTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, RemediationTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__RemediationTaskClient<$Result.GetResult<Prisma.$RemediationTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RemediationTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemediationTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RemediationTasks
     * const remediationTasks = await prisma.remediationTask.findMany()
     * 
     * // Get first 10 RemediationTasks
     * const remediationTasks = await prisma.remediationTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remediationTaskWithIdOnly = await prisma.remediationTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RemediationTaskFindManyArgs>(args?: SelectSubset<T, RemediationTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemediationTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RemediationTask.
     * @param {RemediationTaskCreateArgs} args - Arguments to create a RemediationTask.
     * @example
     * // Create one RemediationTask
     * const RemediationTask = await prisma.remediationTask.create({
     *   data: {
     *     // ... data to create a RemediationTask
     *   }
     * })
     * 
     */
    create<T extends RemediationTaskCreateArgs>(args: SelectSubset<T, RemediationTaskCreateArgs<ExtArgs>>): Prisma__RemediationTaskClient<$Result.GetResult<Prisma.$RemediationTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RemediationTasks.
     * @param {RemediationTaskCreateManyArgs} args - Arguments to create many RemediationTasks.
     * @example
     * // Create many RemediationTasks
     * const remediationTask = await prisma.remediationTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RemediationTaskCreateManyArgs>(args?: SelectSubset<T, RemediationTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RemediationTasks and returns the data saved in the database.
     * @param {RemediationTaskCreateManyAndReturnArgs} args - Arguments to create many RemediationTasks.
     * @example
     * // Create many RemediationTasks
     * const remediationTask = await prisma.remediationTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RemediationTasks and only return the `id`
     * const remediationTaskWithIdOnly = await prisma.remediationTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RemediationTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, RemediationTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemediationTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RemediationTask.
     * @param {RemediationTaskDeleteArgs} args - Arguments to delete one RemediationTask.
     * @example
     * // Delete one RemediationTask
     * const RemediationTask = await prisma.remediationTask.delete({
     *   where: {
     *     // ... filter to delete one RemediationTask
     *   }
     * })
     * 
     */
    delete<T extends RemediationTaskDeleteArgs>(args: SelectSubset<T, RemediationTaskDeleteArgs<ExtArgs>>): Prisma__RemediationTaskClient<$Result.GetResult<Prisma.$RemediationTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RemediationTask.
     * @param {RemediationTaskUpdateArgs} args - Arguments to update one RemediationTask.
     * @example
     * // Update one RemediationTask
     * const remediationTask = await prisma.remediationTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RemediationTaskUpdateArgs>(args: SelectSubset<T, RemediationTaskUpdateArgs<ExtArgs>>): Prisma__RemediationTaskClient<$Result.GetResult<Prisma.$RemediationTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RemediationTasks.
     * @param {RemediationTaskDeleteManyArgs} args - Arguments to filter RemediationTasks to delete.
     * @example
     * // Delete a few RemediationTasks
     * const { count } = await prisma.remediationTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RemediationTaskDeleteManyArgs>(args?: SelectSubset<T, RemediationTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemediationTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemediationTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RemediationTasks
     * const remediationTask = await prisma.remediationTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RemediationTaskUpdateManyArgs>(args: SelectSubset<T, RemediationTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemediationTasks and returns the data updated in the database.
     * @param {RemediationTaskUpdateManyAndReturnArgs} args - Arguments to update many RemediationTasks.
     * @example
     * // Update many RemediationTasks
     * const remediationTask = await prisma.remediationTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RemediationTasks and only return the `id`
     * const remediationTaskWithIdOnly = await prisma.remediationTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RemediationTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, RemediationTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemediationTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RemediationTask.
     * @param {RemediationTaskUpsertArgs} args - Arguments to update or create a RemediationTask.
     * @example
     * // Update or create a RemediationTask
     * const remediationTask = await prisma.remediationTask.upsert({
     *   create: {
     *     // ... data to create a RemediationTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RemediationTask we want to update
     *   }
     * })
     */
    upsert<T extends RemediationTaskUpsertArgs>(args: SelectSubset<T, RemediationTaskUpsertArgs<ExtArgs>>): Prisma__RemediationTaskClient<$Result.GetResult<Prisma.$RemediationTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RemediationTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemediationTaskCountArgs} args - Arguments to filter RemediationTasks to count.
     * @example
     * // Count the number of RemediationTasks
     * const count = await prisma.remediationTask.count({
     *   where: {
     *     // ... the filter for the RemediationTasks we want to count
     *   }
     * })
    **/
    count<T extends RemediationTaskCountArgs>(
      args?: Subset<T, RemediationTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemediationTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RemediationTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemediationTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RemediationTaskAggregateArgs>(args: Subset<T, RemediationTaskAggregateArgs>): Prisma.PrismaPromise<GetRemediationTaskAggregateType<T>>

    /**
     * Group by RemediationTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemediationTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RemediationTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RemediationTaskGroupByArgs['orderBy'] }
        : { orderBy?: RemediationTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RemediationTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemediationTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RemediationTask model
   */
  readonly fields: RemediationTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RemediationTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RemediationTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RemediationTask model
   */
  interface RemediationTaskFieldRefs {
    readonly id: FieldRef<"RemediationTask", 'String'>
    readonly questionId: FieldRef<"RemediationTask", 'String'>
    readonly assignedTo: FieldRef<"RemediationTask", 'String'>
    readonly dueDate: FieldRef<"RemediationTask", 'DateTime'>
    readonly status: FieldRef<"RemediationTask", 'String'>
    readonly priority: FieldRef<"RemediationTask", 'String'>
    readonly createdAt: FieldRef<"RemediationTask", 'DateTime'>
    readonly updatedAt: FieldRef<"RemediationTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RemediationTask findUnique
   */
  export type RemediationTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskInclude<ExtArgs> | null
    /**
     * Filter, which RemediationTask to fetch.
     */
    where: RemediationTaskWhereUniqueInput
  }

  /**
   * RemediationTask findUniqueOrThrow
   */
  export type RemediationTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskInclude<ExtArgs> | null
    /**
     * Filter, which RemediationTask to fetch.
     */
    where: RemediationTaskWhereUniqueInput
  }

  /**
   * RemediationTask findFirst
   */
  export type RemediationTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskInclude<ExtArgs> | null
    /**
     * Filter, which RemediationTask to fetch.
     */
    where?: RemediationTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemediationTasks to fetch.
     */
    orderBy?: RemediationTaskOrderByWithRelationInput | RemediationTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemediationTasks.
     */
    cursor?: RemediationTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemediationTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemediationTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemediationTasks.
     */
    distinct?: RemediationTaskScalarFieldEnum | RemediationTaskScalarFieldEnum[]
  }

  /**
   * RemediationTask findFirstOrThrow
   */
  export type RemediationTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskInclude<ExtArgs> | null
    /**
     * Filter, which RemediationTask to fetch.
     */
    where?: RemediationTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemediationTasks to fetch.
     */
    orderBy?: RemediationTaskOrderByWithRelationInput | RemediationTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemediationTasks.
     */
    cursor?: RemediationTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemediationTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemediationTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemediationTasks.
     */
    distinct?: RemediationTaskScalarFieldEnum | RemediationTaskScalarFieldEnum[]
  }

  /**
   * RemediationTask findMany
   */
  export type RemediationTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskInclude<ExtArgs> | null
    /**
     * Filter, which RemediationTasks to fetch.
     */
    where?: RemediationTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemediationTasks to fetch.
     */
    orderBy?: RemediationTaskOrderByWithRelationInput | RemediationTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RemediationTasks.
     */
    cursor?: RemediationTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemediationTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemediationTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemediationTasks.
     */
    distinct?: RemediationTaskScalarFieldEnum | RemediationTaskScalarFieldEnum[]
  }

  /**
   * RemediationTask create
   */
  export type RemediationTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a RemediationTask.
     */
    data: XOR<RemediationTaskCreateInput, RemediationTaskUncheckedCreateInput>
  }

  /**
   * RemediationTask createMany
   */
  export type RemediationTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RemediationTasks.
     */
    data: RemediationTaskCreateManyInput | RemediationTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemediationTask createManyAndReturn
   */
  export type RemediationTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * The data used to create many RemediationTasks.
     */
    data: RemediationTaskCreateManyInput | RemediationTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RemediationTask update
   */
  export type RemediationTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a RemediationTask.
     */
    data: XOR<RemediationTaskUpdateInput, RemediationTaskUncheckedUpdateInput>
    /**
     * Choose, which RemediationTask to update.
     */
    where: RemediationTaskWhereUniqueInput
  }

  /**
   * RemediationTask updateMany
   */
  export type RemediationTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RemediationTasks.
     */
    data: XOR<RemediationTaskUpdateManyMutationInput, RemediationTaskUncheckedUpdateManyInput>
    /**
     * Filter which RemediationTasks to update
     */
    where?: RemediationTaskWhereInput
    /**
     * Limit how many RemediationTasks to update.
     */
    limit?: number
  }

  /**
   * RemediationTask updateManyAndReturn
   */
  export type RemediationTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * The data used to update RemediationTasks.
     */
    data: XOR<RemediationTaskUpdateManyMutationInput, RemediationTaskUncheckedUpdateManyInput>
    /**
     * Filter which RemediationTasks to update
     */
    where?: RemediationTaskWhereInput
    /**
     * Limit how many RemediationTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RemediationTask upsert
   */
  export type RemediationTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the RemediationTask to update in case it exists.
     */
    where: RemediationTaskWhereUniqueInput
    /**
     * In case the RemediationTask found by the `where` argument doesn't exist, create a new RemediationTask with this data.
     */
    create: XOR<RemediationTaskCreateInput, RemediationTaskUncheckedCreateInput>
    /**
     * In case the RemediationTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RemediationTaskUpdateInput, RemediationTaskUncheckedUpdateInput>
  }

  /**
   * RemediationTask delete
   */
  export type RemediationTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskInclude<ExtArgs> | null
    /**
     * Filter which RemediationTask to delete.
     */
    where: RemediationTaskWhereUniqueInput
  }

  /**
   * RemediationTask deleteMany
   */
  export type RemediationTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemediationTasks to delete
     */
    where?: RemediationTaskWhereInput
    /**
     * Limit how many RemediationTasks to delete.
     */
    limit?: number
  }

  /**
   * RemediationTask without action
   */
  export type RemediationTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemediationTask
     */
    select?: RemediationTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemediationTask
     */
    omit?: RemediationTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemediationTaskInclude<ExtArgs> | null
  }


  /**
   * Model RiskRegister
   */

  export type AggregateRiskRegister = {
    _count: RiskRegisterCountAggregateOutputType | null
    _avg: RiskRegisterAvgAggregateOutputType | null
    _sum: RiskRegisterSumAggregateOutputType | null
    _min: RiskRegisterMinAggregateOutputType | null
    _max: RiskRegisterMaxAggregateOutputType | null
  }

  export type RiskRegisterAvgAggregateOutputType = {
    likelihood: number | null
    impact: number | null
  }

  export type RiskRegisterSumAggregateOutputType = {
    likelihood: number | null
    impact: number | null
  }

  export type RiskRegisterMinAggregateOutputType = {
    id: string | null
    title: string | null
    threat: string | null
    likelihood: number | null
    impact: number | null
    mitigation: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiskRegisterMaxAggregateOutputType = {
    id: string | null
    title: string | null
    threat: string | null
    likelihood: number | null
    impact: number | null
    mitigation: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiskRegisterCountAggregateOutputType = {
    id: number
    title: number
    threat: number
    likelihood: number
    impact: number
    mitigation: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RiskRegisterAvgAggregateInputType = {
    likelihood?: true
    impact?: true
  }

  export type RiskRegisterSumAggregateInputType = {
    likelihood?: true
    impact?: true
  }

  export type RiskRegisterMinAggregateInputType = {
    id?: true
    title?: true
    threat?: true
    likelihood?: true
    impact?: true
    mitigation?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiskRegisterMaxAggregateInputType = {
    id?: true
    title?: true
    threat?: true
    likelihood?: true
    impact?: true
    mitigation?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiskRegisterCountAggregateInputType = {
    id?: true
    title?: true
    threat?: true
    likelihood?: true
    impact?: true
    mitigation?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RiskRegisterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskRegister to aggregate.
     */
    where?: RiskRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskRegisters to fetch.
     */
    orderBy?: RiskRegisterOrderByWithRelationInput | RiskRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskRegisters
    **/
    _count?: true | RiskRegisterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiskRegisterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiskRegisterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskRegisterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskRegisterMaxAggregateInputType
  }

  export type GetRiskRegisterAggregateType<T extends RiskRegisterAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskRegister]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskRegister[P]>
      : GetScalarType<T[P], AggregateRiskRegister[P]>
  }




  export type RiskRegisterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskRegisterWhereInput
    orderBy?: RiskRegisterOrderByWithAggregationInput | RiskRegisterOrderByWithAggregationInput[]
    by: RiskRegisterScalarFieldEnum[] | RiskRegisterScalarFieldEnum
    having?: RiskRegisterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskRegisterCountAggregateInputType | true
    _avg?: RiskRegisterAvgAggregateInputType
    _sum?: RiskRegisterSumAggregateInputType
    _min?: RiskRegisterMinAggregateInputType
    _max?: RiskRegisterMaxAggregateInputType
  }

  export type RiskRegisterGroupByOutputType = {
    id: string
    title: string
    threat: string
    likelihood: number
    impact: number
    mitigation: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: RiskRegisterCountAggregateOutputType | null
    _avg: RiskRegisterAvgAggregateOutputType | null
    _sum: RiskRegisterSumAggregateOutputType | null
    _min: RiskRegisterMinAggregateOutputType | null
    _max: RiskRegisterMaxAggregateOutputType | null
  }

  type GetRiskRegisterGroupByPayload<T extends RiskRegisterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskRegisterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskRegisterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskRegisterGroupByOutputType[P]>
            : GetScalarType<T[P], RiskRegisterGroupByOutputType[P]>
        }
      >
    >


  export type RiskRegisterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    threat?: boolean
    likelihood?: boolean
    impact?: boolean
    mitigation?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["riskRegister"]>

  export type RiskRegisterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    threat?: boolean
    likelihood?: boolean
    impact?: boolean
    mitigation?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["riskRegister"]>

  export type RiskRegisterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    threat?: boolean
    likelihood?: boolean
    impact?: boolean
    mitigation?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["riskRegister"]>

  export type RiskRegisterSelectScalar = {
    id?: boolean
    title?: boolean
    threat?: boolean
    likelihood?: boolean
    impact?: boolean
    mitigation?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RiskRegisterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "threat" | "likelihood" | "impact" | "mitigation" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["riskRegister"]>

  export type $RiskRegisterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskRegister"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      threat: string
      likelihood: number
      impact: number
      mitigation: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["riskRegister"]>
    composites: {}
  }

  type RiskRegisterGetPayload<S extends boolean | null | undefined | RiskRegisterDefaultArgs> = $Result.GetResult<Prisma.$RiskRegisterPayload, S>

  type RiskRegisterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiskRegisterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiskRegisterCountAggregateInputType | true
    }

  export interface RiskRegisterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskRegister'], meta: { name: 'RiskRegister' } }
    /**
     * Find zero or one RiskRegister that matches the filter.
     * @param {RiskRegisterFindUniqueArgs} args - Arguments to find a RiskRegister
     * @example
     * // Get one RiskRegister
     * const riskRegister = await prisma.riskRegister.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskRegisterFindUniqueArgs>(args: SelectSubset<T, RiskRegisterFindUniqueArgs<ExtArgs>>): Prisma__RiskRegisterClient<$Result.GetResult<Prisma.$RiskRegisterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RiskRegister that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiskRegisterFindUniqueOrThrowArgs} args - Arguments to find a RiskRegister
     * @example
     * // Get one RiskRegister
     * const riskRegister = await prisma.riskRegister.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskRegisterFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskRegisterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskRegisterClient<$Result.GetResult<Prisma.$RiskRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskRegister that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRegisterFindFirstArgs} args - Arguments to find a RiskRegister
     * @example
     * // Get one RiskRegister
     * const riskRegister = await prisma.riskRegister.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskRegisterFindFirstArgs>(args?: SelectSubset<T, RiskRegisterFindFirstArgs<ExtArgs>>): Prisma__RiskRegisterClient<$Result.GetResult<Prisma.$RiskRegisterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskRegister that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRegisterFindFirstOrThrowArgs} args - Arguments to find a RiskRegister
     * @example
     * // Get one RiskRegister
     * const riskRegister = await prisma.riskRegister.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskRegisterFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskRegisterFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskRegisterClient<$Result.GetResult<Prisma.$RiskRegisterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RiskRegisters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRegisterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskRegisters
     * const riskRegisters = await prisma.riskRegister.findMany()
     * 
     * // Get first 10 RiskRegisters
     * const riskRegisters = await prisma.riskRegister.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskRegisterWithIdOnly = await prisma.riskRegister.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskRegisterFindManyArgs>(args?: SelectSubset<T, RiskRegisterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskRegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RiskRegister.
     * @param {RiskRegisterCreateArgs} args - Arguments to create a RiskRegister.
     * @example
     * // Create one RiskRegister
     * const RiskRegister = await prisma.riskRegister.create({
     *   data: {
     *     // ... data to create a RiskRegister
     *   }
     * })
     * 
     */
    create<T extends RiskRegisterCreateArgs>(args: SelectSubset<T, RiskRegisterCreateArgs<ExtArgs>>): Prisma__RiskRegisterClient<$Result.GetResult<Prisma.$RiskRegisterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RiskRegisters.
     * @param {RiskRegisterCreateManyArgs} args - Arguments to create many RiskRegisters.
     * @example
     * // Create many RiskRegisters
     * const riskRegister = await prisma.riskRegister.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskRegisterCreateManyArgs>(args?: SelectSubset<T, RiskRegisterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskRegisters and returns the data saved in the database.
     * @param {RiskRegisterCreateManyAndReturnArgs} args - Arguments to create many RiskRegisters.
     * @example
     * // Create many RiskRegisters
     * const riskRegister = await prisma.riskRegister.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskRegisters and only return the `id`
     * const riskRegisterWithIdOnly = await prisma.riskRegister.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskRegisterCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskRegisterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskRegisterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RiskRegister.
     * @param {RiskRegisterDeleteArgs} args - Arguments to delete one RiskRegister.
     * @example
     * // Delete one RiskRegister
     * const RiskRegister = await prisma.riskRegister.delete({
     *   where: {
     *     // ... filter to delete one RiskRegister
     *   }
     * })
     * 
     */
    delete<T extends RiskRegisterDeleteArgs>(args: SelectSubset<T, RiskRegisterDeleteArgs<ExtArgs>>): Prisma__RiskRegisterClient<$Result.GetResult<Prisma.$RiskRegisterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RiskRegister.
     * @param {RiskRegisterUpdateArgs} args - Arguments to update one RiskRegister.
     * @example
     * // Update one RiskRegister
     * const riskRegister = await prisma.riskRegister.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskRegisterUpdateArgs>(args: SelectSubset<T, RiskRegisterUpdateArgs<ExtArgs>>): Prisma__RiskRegisterClient<$Result.GetResult<Prisma.$RiskRegisterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RiskRegisters.
     * @param {RiskRegisterDeleteManyArgs} args - Arguments to filter RiskRegisters to delete.
     * @example
     * // Delete a few RiskRegisters
     * const { count } = await prisma.riskRegister.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskRegisterDeleteManyArgs>(args?: SelectSubset<T, RiskRegisterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRegisterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskRegisters
     * const riskRegister = await prisma.riskRegister.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskRegisterUpdateManyArgs>(args: SelectSubset<T, RiskRegisterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskRegisters and returns the data updated in the database.
     * @param {RiskRegisterUpdateManyAndReturnArgs} args - Arguments to update many RiskRegisters.
     * @example
     * // Update many RiskRegisters
     * const riskRegister = await prisma.riskRegister.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RiskRegisters and only return the `id`
     * const riskRegisterWithIdOnly = await prisma.riskRegister.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RiskRegisterUpdateManyAndReturnArgs>(args: SelectSubset<T, RiskRegisterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskRegisterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RiskRegister.
     * @param {RiskRegisterUpsertArgs} args - Arguments to update or create a RiskRegister.
     * @example
     * // Update or create a RiskRegister
     * const riskRegister = await prisma.riskRegister.upsert({
     *   create: {
     *     // ... data to create a RiskRegister
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskRegister we want to update
     *   }
     * })
     */
    upsert<T extends RiskRegisterUpsertArgs>(args: SelectSubset<T, RiskRegisterUpsertArgs<ExtArgs>>): Prisma__RiskRegisterClient<$Result.GetResult<Prisma.$RiskRegisterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RiskRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRegisterCountArgs} args - Arguments to filter RiskRegisters to count.
     * @example
     * // Count the number of RiskRegisters
     * const count = await prisma.riskRegister.count({
     *   where: {
     *     // ... the filter for the RiskRegisters we want to count
     *   }
     * })
    **/
    count<T extends RiskRegisterCountArgs>(
      args?: Subset<T, RiskRegisterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskRegisterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRegisterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RiskRegisterAggregateArgs>(args: Subset<T, RiskRegisterAggregateArgs>): Prisma.PrismaPromise<GetRiskRegisterAggregateType<T>>

    /**
     * Group by RiskRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRegisterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RiskRegisterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskRegisterGroupByArgs['orderBy'] }
        : { orderBy?: RiskRegisterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiskRegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskRegister model
   */
  readonly fields: RiskRegisterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskRegister.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskRegisterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RiskRegister model
   */
  interface RiskRegisterFieldRefs {
    readonly id: FieldRef<"RiskRegister", 'String'>
    readonly title: FieldRef<"RiskRegister", 'String'>
    readonly threat: FieldRef<"RiskRegister", 'String'>
    readonly likelihood: FieldRef<"RiskRegister", 'Int'>
    readonly impact: FieldRef<"RiskRegister", 'Int'>
    readonly mitigation: FieldRef<"RiskRegister", 'String'>
    readonly status: FieldRef<"RiskRegister", 'String'>
    readonly createdAt: FieldRef<"RiskRegister", 'DateTime'>
    readonly updatedAt: FieldRef<"RiskRegister", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskRegister findUnique
   */
  export type RiskRegisterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRegister
     */
    select?: RiskRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRegister
     */
    omit?: RiskRegisterOmit<ExtArgs> | null
    /**
     * Filter, which RiskRegister to fetch.
     */
    where: RiskRegisterWhereUniqueInput
  }

  /**
   * RiskRegister findUniqueOrThrow
   */
  export type RiskRegisterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRegister
     */
    select?: RiskRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRegister
     */
    omit?: RiskRegisterOmit<ExtArgs> | null
    /**
     * Filter, which RiskRegister to fetch.
     */
    where: RiskRegisterWhereUniqueInput
  }

  /**
   * RiskRegister findFirst
   */
  export type RiskRegisterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRegister
     */
    select?: RiskRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRegister
     */
    omit?: RiskRegisterOmit<ExtArgs> | null
    /**
     * Filter, which RiskRegister to fetch.
     */
    where?: RiskRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskRegisters to fetch.
     */
    orderBy?: RiskRegisterOrderByWithRelationInput | RiskRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskRegisters.
     */
    cursor?: RiskRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskRegisters.
     */
    distinct?: RiskRegisterScalarFieldEnum | RiskRegisterScalarFieldEnum[]
  }

  /**
   * RiskRegister findFirstOrThrow
   */
  export type RiskRegisterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRegister
     */
    select?: RiskRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRegister
     */
    omit?: RiskRegisterOmit<ExtArgs> | null
    /**
     * Filter, which RiskRegister to fetch.
     */
    where?: RiskRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskRegisters to fetch.
     */
    orderBy?: RiskRegisterOrderByWithRelationInput | RiskRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskRegisters.
     */
    cursor?: RiskRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskRegisters.
     */
    distinct?: RiskRegisterScalarFieldEnum | RiskRegisterScalarFieldEnum[]
  }

  /**
   * RiskRegister findMany
   */
  export type RiskRegisterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRegister
     */
    select?: RiskRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRegister
     */
    omit?: RiskRegisterOmit<ExtArgs> | null
    /**
     * Filter, which RiskRegisters to fetch.
     */
    where?: RiskRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskRegisters to fetch.
     */
    orderBy?: RiskRegisterOrderByWithRelationInput | RiskRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskRegisters.
     */
    cursor?: RiskRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskRegisters.
     */
    distinct?: RiskRegisterScalarFieldEnum | RiskRegisterScalarFieldEnum[]
  }

  /**
   * RiskRegister create
   */
  export type RiskRegisterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRegister
     */
    select?: RiskRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRegister
     */
    omit?: RiskRegisterOmit<ExtArgs> | null
    /**
     * The data needed to create a RiskRegister.
     */
    data: XOR<RiskRegisterCreateInput, RiskRegisterUncheckedCreateInput>
  }

  /**
   * RiskRegister createMany
   */
  export type RiskRegisterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskRegisters.
     */
    data: RiskRegisterCreateManyInput | RiskRegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskRegister createManyAndReturn
   */
  export type RiskRegisterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRegister
     */
    select?: RiskRegisterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRegister
     */
    omit?: RiskRegisterOmit<ExtArgs> | null
    /**
     * The data used to create many RiskRegisters.
     */
    data: RiskRegisterCreateManyInput | RiskRegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskRegister update
   */
  export type RiskRegisterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRegister
     */
    select?: RiskRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRegister
     */
    omit?: RiskRegisterOmit<ExtArgs> | null
    /**
     * The data needed to update a RiskRegister.
     */
    data: XOR<RiskRegisterUpdateInput, RiskRegisterUncheckedUpdateInput>
    /**
     * Choose, which RiskRegister to update.
     */
    where: RiskRegisterWhereUniqueInput
  }

  /**
   * RiskRegister updateMany
   */
  export type RiskRegisterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskRegisters.
     */
    data: XOR<RiskRegisterUpdateManyMutationInput, RiskRegisterUncheckedUpdateManyInput>
    /**
     * Filter which RiskRegisters to update
     */
    where?: RiskRegisterWhereInput
    /**
     * Limit how many RiskRegisters to update.
     */
    limit?: number
  }

  /**
   * RiskRegister updateManyAndReturn
   */
  export type RiskRegisterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRegister
     */
    select?: RiskRegisterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRegister
     */
    omit?: RiskRegisterOmit<ExtArgs> | null
    /**
     * The data used to update RiskRegisters.
     */
    data: XOR<RiskRegisterUpdateManyMutationInput, RiskRegisterUncheckedUpdateManyInput>
    /**
     * Filter which RiskRegisters to update
     */
    where?: RiskRegisterWhereInput
    /**
     * Limit how many RiskRegisters to update.
     */
    limit?: number
  }

  /**
   * RiskRegister upsert
   */
  export type RiskRegisterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRegister
     */
    select?: RiskRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRegister
     */
    omit?: RiskRegisterOmit<ExtArgs> | null
    /**
     * The filter to search for the RiskRegister to update in case it exists.
     */
    where: RiskRegisterWhereUniqueInput
    /**
     * In case the RiskRegister found by the `where` argument doesn't exist, create a new RiskRegister with this data.
     */
    create: XOR<RiskRegisterCreateInput, RiskRegisterUncheckedCreateInput>
    /**
     * In case the RiskRegister was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskRegisterUpdateInput, RiskRegisterUncheckedUpdateInput>
  }

  /**
   * RiskRegister delete
   */
  export type RiskRegisterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRegister
     */
    select?: RiskRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRegister
     */
    omit?: RiskRegisterOmit<ExtArgs> | null
    /**
     * Filter which RiskRegister to delete.
     */
    where: RiskRegisterWhereUniqueInput
  }

  /**
   * RiskRegister deleteMany
   */
  export type RiskRegisterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskRegisters to delete
     */
    where?: RiskRegisterWhereInput
    /**
     * Limit how many RiskRegisters to delete.
     */
    limit?: number
  }

  /**
   * RiskRegister without action
   */
  export type RiskRegisterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRegister
     */
    select?: RiskRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRegister
     */
    omit?: RiskRegisterOmit<ExtArgs> | null
  }


  /**
   * Model SecurityAlert
   */

  export type AggregateSecurityAlert = {
    _count: SecurityAlertCountAggregateOutputType | null
    _min: SecurityAlertMinAggregateOutputType | null
    _max: SecurityAlertMaxAggregateOutputType | null
  }

  export type SecurityAlertMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    source: string | null
    severity: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SecurityAlertMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    source: string | null
    severity: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SecurityAlertCountAggregateOutputType = {
    id: number
    title: number
    description: number
    source: number
    severity: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SecurityAlertMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    source?: true
    severity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SecurityAlertMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    source?: true
    severity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SecurityAlertCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    source?: true
    severity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SecurityAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityAlert to aggregate.
     */
    where?: SecurityAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAlerts to fetch.
     */
    orderBy?: SecurityAlertOrderByWithRelationInput | SecurityAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityAlerts
    **/
    _count?: true | SecurityAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityAlertMaxAggregateInputType
  }

  export type GetSecurityAlertAggregateType<T extends SecurityAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityAlert[P]>
      : GetScalarType<T[P], AggregateSecurityAlert[P]>
  }




  export type SecurityAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityAlertWhereInput
    orderBy?: SecurityAlertOrderByWithAggregationInput | SecurityAlertOrderByWithAggregationInput[]
    by: SecurityAlertScalarFieldEnum[] | SecurityAlertScalarFieldEnum
    having?: SecurityAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityAlertCountAggregateInputType | true
    _min?: SecurityAlertMinAggregateInputType
    _max?: SecurityAlertMaxAggregateInputType
  }

  export type SecurityAlertGroupByOutputType = {
    id: string
    title: string
    description: string
    source: string
    severity: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: SecurityAlertCountAggregateOutputType | null
    _min: SecurityAlertMinAggregateOutputType | null
    _max: SecurityAlertMaxAggregateOutputType | null
  }

  type GetSecurityAlertGroupByPayload<T extends SecurityAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityAlertGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityAlertGroupByOutputType[P]>
        }
      >
    >


  export type SecurityAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    source?: boolean
    severity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["securityAlert"]>

  export type SecurityAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    source?: boolean
    severity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["securityAlert"]>

  export type SecurityAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    source?: boolean
    severity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["securityAlert"]>

  export type SecurityAlertSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    source?: boolean
    severity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SecurityAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "source" | "severity" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["securityAlert"]>

  export type $SecurityAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityAlert"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      source: string
      severity: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["securityAlert"]>
    composites: {}
  }

  type SecurityAlertGetPayload<S extends boolean | null | undefined | SecurityAlertDefaultArgs> = $Result.GetResult<Prisma.$SecurityAlertPayload, S>

  type SecurityAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityAlertCountAggregateInputType | true
    }

  export interface SecurityAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityAlert'], meta: { name: 'SecurityAlert' } }
    /**
     * Find zero or one SecurityAlert that matches the filter.
     * @param {SecurityAlertFindUniqueArgs} args - Arguments to find a SecurityAlert
     * @example
     * // Get one SecurityAlert
     * const securityAlert = await prisma.securityAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityAlertFindUniqueArgs>(args: SelectSubset<T, SecurityAlertFindUniqueArgs<ExtArgs>>): Prisma__SecurityAlertClient<$Result.GetResult<Prisma.$SecurityAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityAlertFindUniqueOrThrowArgs} args - Arguments to find a SecurityAlert
     * @example
     * // Get one SecurityAlert
     * const securityAlert = await prisma.securityAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityAlertClient<$Result.GetResult<Prisma.$SecurityAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAlertFindFirstArgs} args - Arguments to find a SecurityAlert
     * @example
     * // Get one SecurityAlert
     * const securityAlert = await prisma.securityAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityAlertFindFirstArgs>(args?: SelectSubset<T, SecurityAlertFindFirstArgs<ExtArgs>>): Prisma__SecurityAlertClient<$Result.GetResult<Prisma.$SecurityAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAlertFindFirstOrThrowArgs} args - Arguments to find a SecurityAlert
     * @example
     * // Get one SecurityAlert
     * const securityAlert = await prisma.securityAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityAlertClient<$Result.GetResult<Prisma.$SecurityAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityAlerts
     * const securityAlerts = await prisma.securityAlert.findMany()
     * 
     * // Get first 10 SecurityAlerts
     * const securityAlerts = await prisma.securityAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityAlertWithIdOnly = await prisma.securityAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityAlertFindManyArgs>(args?: SelectSubset<T, SecurityAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityAlert.
     * @param {SecurityAlertCreateArgs} args - Arguments to create a SecurityAlert.
     * @example
     * // Create one SecurityAlert
     * const SecurityAlert = await prisma.securityAlert.create({
     *   data: {
     *     // ... data to create a SecurityAlert
     *   }
     * })
     * 
     */
    create<T extends SecurityAlertCreateArgs>(args: SelectSubset<T, SecurityAlertCreateArgs<ExtArgs>>): Prisma__SecurityAlertClient<$Result.GetResult<Prisma.$SecurityAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityAlerts.
     * @param {SecurityAlertCreateManyArgs} args - Arguments to create many SecurityAlerts.
     * @example
     * // Create many SecurityAlerts
     * const securityAlert = await prisma.securityAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityAlertCreateManyArgs>(args?: SelectSubset<T, SecurityAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityAlerts and returns the data saved in the database.
     * @param {SecurityAlertCreateManyAndReturnArgs} args - Arguments to create many SecurityAlerts.
     * @example
     * // Create many SecurityAlerts
     * const securityAlert = await prisma.securityAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityAlerts and only return the `id`
     * const securityAlertWithIdOnly = await prisma.securityAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecurityAlert.
     * @param {SecurityAlertDeleteArgs} args - Arguments to delete one SecurityAlert.
     * @example
     * // Delete one SecurityAlert
     * const SecurityAlert = await prisma.securityAlert.delete({
     *   where: {
     *     // ... filter to delete one SecurityAlert
     *   }
     * })
     * 
     */
    delete<T extends SecurityAlertDeleteArgs>(args: SelectSubset<T, SecurityAlertDeleteArgs<ExtArgs>>): Prisma__SecurityAlertClient<$Result.GetResult<Prisma.$SecurityAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityAlert.
     * @param {SecurityAlertUpdateArgs} args - Arguments to update one SecurityAlert.
     * @example
     * // Update one SecurityAlert
     * const securityAlert = await prisma.securityAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityAlertUpdateArgs>(args: SelectSubset<T, SecurityAlertUpdateArgs<ExtArgs>>): Prisma__SecurityAlertClient<$Result.GetResult<Prisma.$SecurityAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityAlerts.
     * @param {SecurityAlertDeleteManyArgs} args - Arguments to filter SecurityAlerts to delete.
     * @example
     * // Delete a few SecurityAlerts
     * const { count } = await prisma.securityAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityAlertDeleteManyArgs>(args?: SelectSubset<T, SecurityAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityAlerts
     * const securityAlert = await prisma.securityAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityAlertUpdateManyArgs>(args: SelectSubset<T, SecurityAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityAlerts and returns the data updated in the database.
     * @param {SecurityAlertUpdateManyAndReturnArgs} args - Arguments to update many SecurityAlerts.
     * @example
     * // Update many SecurityAlerts
     * const securityAlert = await prisma.securityAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecurityAlerts and only return the `id`
     * const securityAlertWithIdOnly = await prisma.securityAlert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecurityAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecurityAlert.
     * @param {SecurityAlertUpsertArgs} args - Arguments to update or create a SecurityAlert.
     * @example
     * // Update or create a SecurityAlert
     * const securityAlert = await prisma.securityAlert.upsert({
     *   create: {
     *     // ... data to create a SecurityAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityAlert we want to update
     *   }
     * })
     */
    upsert<T extends SecurityAlertUpsertArgs>(args: SelectSubset<T, SecurityAlertUpsertArgs<ExtArgs>>): Prisma__SecurityAlertClient<$Result.GetResult<Prisma.$SecurityAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAlertCountArgs} args - Arguments to filter SecurityAlerts to count.
     * @example
     * // Count the number of SecurityAlerts
     * const count = await prisma.securityAlert.count({
     *   where: {
     *     // ... the filter for the SecurityAlerts we want to count
     *   }
     * })
    **/
    count<T extends SecurityAlertCountArgs>(
      args?: Subset<T, SecurityAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecurityAlertAggregateArgs>(args: Subset<T, SecurityAlertAggregateArgs>): Prisma.PrismaPromise<GetSecurityAlertAggregateType<T>>

    /**
     * Group by SecurityAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecurityAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityAlertGroupByArgs['orderBy'] }
        : { orderBy?: SecurityAlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecurityAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityAlert model
   */
  readonly fields: SecurityAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecurityAlert model
   */
  interface SecurityAlertFieldRefs {
    readonly id: FieldRef<"SecurityAlert", 'String'>
    readonly title: FieldRef<"SecurityAlert", 'String'>
    readonly description: FieldRef<"SecurityAlert", 'String'>
    readonly source: FieldRef<"SecurityAlert", 'String'>
    readonly severity: FieldRef<"SecurityAlert", 'String'>
    readonly status: FieldRef<"SecurityAlert", 'String'>
    readonly createdAt: FieldRef<"SecurityAlert", 'DateTime'>
    readonly updatedAt: FieldRef<"SecurityAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecurityAlert findUnique
   */
  export type SecurityAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAlert
     */
    select?: SecurityAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAlert
     */
    omit?: SecurityAlertOmit<ExtArgs> | null
    /**
     * Filter, which SecurityAlert to fetch.
     */
    where: SecurityAlertWhereUniqueInput
  }

  /**
   * SecurityAlert findUniqueOrThrow
   */
  export type SecurityAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAlert
     */
    select?: SecurityAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAlert
     */
    omit?: SecurityAlertOmit<ExtArgs> | null
    /**
     * Filter, which SecurityAlert to fetch.
     */
    where: SecurityAlertWhereUniqueInput
  }

  /**
   * SecurityAlert findFirst
   */
  export type SecurityAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAlert
     */
    select?: SecurityAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAlert
     */
    omit?: SecurityAlertOmit<ExtArgs> | null
    /**
     * Filter, which SecurityAlert to fetch.
     */
    where?: SecurityAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAlerts to fetch.
     */
    orderBy?: SecurityAlertOrderByWithRelationInput | SecurityAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityAlerts.
     */
    cursor?: SecurityAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityAlerts.
     */
    distinct?: SecurityAlertScalarFieldEnum | SecurityAlertScalarFieldEnum[]
  }

  /**
   * SecurityAlert findFirstOrThrow
   */
  export type SecurityAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAlert
     */
    select?: SecurityAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAlert
     */
    omit?: SecurityAlertOmit<ExtArgs> | null
    /**
     * Filter, which SecurityAlert to fetch.
     */
    where?: SecurityAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAlerts to fetch.
     */
    orderBy?: SecurityAlertOrderByWithRelationInput | SecurityAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityAlerts.
     */
    cursor?: SecurityAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityAlerts.
     */
    distinct?: SecurityAlertScalarFieldEnum | SecurityAlertScalarFieldEnum[]
  }

  /**
   * SecurityAlert findMany
   */
  export type SecurityAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAlert
     */
    select?: SecurityAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAlert
     */
    omit?: SecurityAlertOmit<ExtArgs> | null
    /**
     * Filter, which SecurityAlerts to fetch.
     */
    where?: SecurityAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAlerts to fetch.
     */
    orderBy?: SecurityAlertOrderByWithRelationInput | SecurityAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityAlerts.
     */
    cursor?: SecurityAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityAlerts.
     */
    distinct?: SecurityAlertScalarFieldEnum | SecurityAlertScalarFieldEnum[]
  }

  /**
   * SecurityAlert create
   */
  export type SecurityAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAlert
     */
    select?: SecurityAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAlert
     */
    omit?: SecurityAlertOmit<ExtArgs> | null
    /**
     * The data needed to create a SecurityAlert.
     */
    data: XOR<SecurityAlertCreateInput, SecurityAlertUncheckedCreateInput>
  }

  /**
   * SecurityAlert createMany
   */
  export type SecurityAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityAlerts.
     */
    data: SecurityAlertCreateManyInput | SecurityAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityAlert createManyAndReturn
   */
  export type SecurityAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAlert
     */
    select?: SecurityAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAlert
     */
    omit?: SecurityAlertOmit<ExtArgs> | null
    /**
     * The data used to create many SecurityAlerts.
     */
    data: SecurityAlertCreateManyInput | SecurityAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityAlert update
   */
  export type SecurityAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAlert
     */
    select?: SecurityAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAlert
     */
    omit?: SecurityAlertOmit<ExtArgs> | null
    /**
     * The data needed to update a SecurityAlert.
     */
    data: XOR<SecurityAlertUpdateInput, SecurityAlertUncheckedUpdateInput>
    /**
     * Choose, which SecurityAlert to update.
     */
    where: SecurityAlertWhereUniqueInput
  }

  /**
   * SecurityAlert updateMany
   */
  export type SecurityAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityAlerts.
     */
    data: XOR<SecurityAlertUpdateManyMutationInput, SecurityAlertUncheckedUpdateManyInput>
    /**
     * Filter which SecurityAlerts to update
     */
    where?: SecurityAlertWhereInput
    /**
     * Limit how many SecurityAlerts to update.
     */
    limit?: number
  }

  /**
   * SecurityAlert updateManyAndReturn
   */
  export type SecurityAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAlert
     */
    select?: SecurityAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAlert
     */
    omit?: SecurityAlertOmit<ExtArgs> | null
    /**
     * The data used to update SecurityAlerts.
     */
    data: XOR<SecurityAlertUpdateManyMutationInput, SecurityAlertUncheckedUpdateManyInput>
    /**
     * Filter which SecurityAlerts to update
     */
    where?: SecurityAlertWhereInput
    /**
     * Limit how many SecurityAlerts to update.
     */
    limit?: number
  }

  /**
   * SecurityAlert upsert
   */
  export type SecurityAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAlert
     */
    select?: SecurityAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAlert
     */
    omit?: SecurityAlertOmit<ExtArgs> | null
    /**
     * The filter to search for the SecurityAlert to update in case it exists.
     */
    where: SecurityAlertWhereUniqueInput
    /**
     * In case the SecurityAlert found by the `where` argument doesn't exist, create a new SecurityAlert with this data.
     */
    create: XOR<SecurityAlertCreateInput, SecurityAlertUncheckedCreateInput>
    /**
     * In case the SecurityAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityAlertUpdateInput, SecurityAlertUncheckedUpdateInput>
  }

  /**
   * SecurityAlert delete
   */
  export type SecurityAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAlert
     */
    select?: SecurityAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAlert
     */
    omit?: SecurityAlertOmit<ExtArgs> | null
    /**
     * Filter which SecurityAlert to delete.
     */
    where: SecurityAlertWhereUniqueInput
  }

  /**
   * SecurityAlert deleteMany
   */
  export type SecurityAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityAlerts to delete
     */
    where?: SecurityAlertWhereInput
    /**
     * Limit how many SecurityAlerts to delete.
     */
    limit?: number
  }

  /**
   * SecurityAlert without action
   */
  export type SecurityAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAlert
     */
    select?: SecurityAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAlert
     */
    omit?: SecurityAlertOmit<ExtArgs> | null
  }


  /**
   * Model EmployeeAttestation
   */

  export type AggregateEmployeeAttestation = {
    _count: EmployeeAttestationCountAggregateOutputType | null
    _min: EmployeeAttestationMinAggregateOutputType | null
    _max: EmployeeAttestationMaxAggregateOutputType | null
  }

  export type EmployeeAttestationMinAggregateOutputType = {
    id: string | null
    employeeName: string | null
    employeeEmail: string | null
    policyTitle: string | null
    status: string | null
    signedAt: Date | null
    createdAt: Date | null
  }

  export type EmployeeAttestationMaxAggregateOutputType = {
    id: string | null
    employeeName: string | null
    employeeEmail: string | null
    policyTitle: string | null
    status: string | null
    signedAt: Date | null
    createdAt: Date | null
  }

  export type EmployeeAttestationCountAggregateOutputType = {
    id: number
    employeeName: number
    employeeEmail: number
    policyTitle: number
    status: number
    signedAt: number
    createdAt: number
    _all: number
  }


  export type EmployeeAttestationMinAggregateInputType = {
    id?: true
    employeeName?: true
    employeeEmail?: true
    policyTitle?: true
    status?: true
    signedAt?: true
    createdAt?: true
  }

  export type EmployeeAttestationMaxAggregateInputType = {
    id?: true
    employeeName?: true
    employeeEmail?: true
    policyTitle?: true
    status?: true
    signedAt?: true
    createdAt?: true
  }

  export type EmployeeAttestationCountAggregateInputType = {
    id?: true
    employeeName?: true
    employeeEmail?: true
    policyTitle?: true
    status?: true
    signedAt?: true
    createdAt?: true
    _all?: true
  }

  export type EmployeeAttestationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeAttestation to aggregate.
     */
    where?: EmployeeAttestationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeAttestations to fetch.
     */
    orderBy?: EmployeeAttestationOrderByWithRelationInput | EmployeeAttestationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeAttestationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeAttestations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeAttestations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeAttestations
    **/
    _count?: true | EmployeeAttestationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeAttestationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeAttestationMaxAggregateInputType
  }

  export type GetEmployeeAttestationAggregateType<T extends EmployeeAttestationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeAttestation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeAttestation[P]>
      : GetScalarType<T[P], AggregateEmployeeAttestation[P]>
  }




  export type EmployeeAttestationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeAttestationWhereInput
    orderBy?: EmployeeAttestationOrderByWithAggregationInput | EmployeeAttestationOrderByWithAggregationInput[]
    by: EmployeeAttestationScalarFieldEnum[] | EmployeeAttestationScalarFieldEnum
    having?: EmployeeAttestationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeAttestationCountAggregateInputType | true
    _min?: EmployeeAttestationMinAggregateInputType
    _max?: EmployeeAttestationMaxAggregateInputType
  }

  export type EmployeeAttestationGroupByOutputType = {
    id: string
    employeeName: string
    employeeEmail: string
    policyTitle: string
    status: string
    signedAt: Date | null
    createdAt: Date
    _count: EmployeeAttestationCountAggregateOutputType | null
    _min: EmployeeAttestationMinAggregateOutputType | null
    _max: EmployeeAttestationMaxAggregateOutputType | null
  }

  type GetEmployeeAttestationGroupByPayload<T extends EmployeeAttestationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeAttestationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeAttestationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeAttestationGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeAttestationGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeAttestationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeName?: boolean
    employeeEmail?: boolean
    policyTitle?: boolean
    status?: boolean
    signedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["employeeAttestation"]>

  export type EmployeeAttestationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeName?: boolean
    employeeEmail?: boolean
    policyTitle?: boolean
    status?: boolean
    signedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["employeeAttestation"]>

  export type EmployeeAttestationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeName?: boolean
    employeeEmail?: boolean
    policyTitle?: boolean
    status?: boolean
    signedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["employeeAttestation"]>

  export type EmployeeAttestationSelectScalar = {
    id?: boolean
    employeeName?: boolean
    employeeEmail?: boolean
    policyTitle?: boolean
    status?: boolean
    signedAt?: boolean
    createdAt?: boolean
  }

  export type EmployeeAttestationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeName" | "employeeEmail" | "policyTitle" | "status" | "signedAt" | "createdAt", ExtArgs["result"]["employeeAttestation"]>

  export type $EmployeeAttestationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeAttestation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeName: string
      employeeEmail: string
      policyTitle: string
      status: string
      signedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["employeeAttestation"]>
    composites: {}
  }

  type EmployeeAttestationGetPayload<S extends boolean | null | undefined | EmployeeAttestationDefaultArgs> = $Result.GetResult<Prisma.$EmployeeAttestationPayload, S>

  type EmployeeAttestationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeAttestationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeAttestationCountAggregateInputType | true
    }

  export interface EmployeeAttestationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeAttestation'], meta: { name: 'EmployeeAttestation' } }
    /**
     * Find zero or one EmployeeAttestation that matches the filter.
     * @param {EmployeeAttestationFindUniqueArgs} args - Arguments to find a EmployeeAttestation
     * @example
     * // Get one EmployeeAttestation
     * const employeeAttestation = await prisma.employeeAttestation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeAttestationFindUniqueArgs>(args: SelectSubset<T, EmployeeAttestationFindUniqueArgs<ExtArgs>>): Prisma__EmployeeAttestationClient<$Result.GetResult<Prisma.$EmployeeAttestationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeAttestation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeAttestationFindUniqueOrThrowArgs} args - Arguments to find a EmployeeAttestation
     * @example
     * // Get one EmployeeAttestation
     * const employeeAttestation = await prisma.employeeAttestation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeAttestationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeAttestationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeAttestationClient<$Result.GetResult<Prisma.$EmployeeAttestationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeAttestation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttestationFindFirstArgs} args - Arguments to find a EmployeeAttestation
     * @example
     * // Get one EmployeeAttestation
     * const employeeAttestation = await prisma.employeeAttestation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeAttestationFindFirstArgs>(args?: SelectSubset<T, EmployeeAttestationFindFirstArgs<ExtArgs>>): Prisma__EmployeeAttestationClient<$Result.GetResult<Prisma.$EmployeeAttestationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeAttestation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttestationFindFirstOrThrowArgs} args - Arguments to find a EmployeeAttestation
     * @example
     * // Get one EmployeeAttestation
     * const employeeAttestation = await prisma.employeeAttestation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeAttestationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeAttestationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeAttestationClient<$Result.GetResult<Prisma.$EmployeeAttestationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeAttestations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttestationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeAttestations
     * const employeeAttestations = await prisma.employeeAttestation.findMany()
     * 
     * // Get first 10 EmployeeAttestations
     * const employeeAttestations = await prisma.employeeAttestation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeAttestationWithIdOnly = await prisma.employeeAttestation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeAttestationFindManyArgs>(args?: SelectSubset<T, EmployeeAttestationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeAttestationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeAttestation.
     * @param {EmployeeAttestationCreateArgs} args - Arguments to create a EmployeeAttestation.
     * @example
     * // Create one EmployeeAttestation
     * const EmployeeAttestation = await prisma.employeeAttestation.create({
     *   data: {
     *     // ... data to create a EmployeeAttestation
     *   }
     * })
     * 
     */
    create<T extends EmployeeAttestationCreateArgs>(args: SelectSubset<T, EmployeeAttestationCreateArgs<ExtArgs>>): Prisma__EmployeeAttestationClient<$Result.GetResult<Prisma.$EmployeeAttestationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeAttestations.
     * @param {EmployeeAttestationCreateManyArgs} args - Arguments to create many EmployeeAttestations.
     * @example
     * // Create many EmployeeAttestations
     * const employeeAttestation = await prisma.employeeAttestation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeAttestationCreateManyArgs>(args?: SelectSubset<T, EmployeeAttestationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeAttestations and returns the data saved in the database.
     * @param {EmployeeAttestationCreateManyAndReturnArgs} args - Arguments to create many EmployeeAttestations.
     * @example
     * // Create many EmployeeAttestations
     * const employeeAttestation = await prisma.employeeAttestation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeAttestations and only return the `id`
     * const employeeAttestationWithIdOnly = await prisma.employeeAttestation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeAttestationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeAttestationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeAttestationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeAttestation.
     * @param {EmployeeAttestationDeleteArgs} args - Arguments to delete one EmployeeAttestation.
     * @example
     * // Delete one EmployeeAttestation
     * const EmployeeAttestation = await prisma.employeeAttestation.delete({
     *   where: {
     *     // ... filter to delete one EmployeeAttestation
     *   }
     * })
     * 
     */
    delete<T extends EmployeeAttestationDeleteArgs>(args: SelectSubset<T, EmployeeAttestationDeleteArgs<ExtArgs>>): Prisma__EmployeeAttestationClient<$Result.GetResult<Prisma.$EmployeeAttestationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeAttestation.
     * @param {EmployeeAttestationUpdateArgs} args - Arguments to update one EmployeeAttestation.
     * @example
     * // Update one EmployeeAttestation
     * const employeeAttestation = await prisma.employeeAttestation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeAttestationUpdateArgs>(args: SelectSubset<T, EmployeeAttestationUpdateArgs<ExtArgs>>): Prisma__EmployeeAttestationClient<$Result.GetResult<Prisma.$EmployeeAttestationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeAttestations.
     * @param {EmployeeAttestationDeleteManyArgs} args - Arguments to filter EmployeeAttestations to delete.
     * @example
     * // Delete a few EmployeeAttestations
     * const { count } = await prisma.employeeAttestation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeAttestationDeleteManyArgs>(args?: SelectSubset<T, EmployeeAttestationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeAttestations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttestationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeAttestations
     * const employeeAttestation = await prisma.employeeAttestation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeAttestationUpdateManyArgs>(args: SelectSubset<T, EmployeeAttestationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeAttestations and returns the data updated in the database.
     * @param {EmployeeAttestationUpdateManyAndReturnArgs} args - Arguments to update many EmployeeAttestations.
     * @example
     * // Update many EmployeeAttestations
     * const employeeAttestation = await prisma.employeeAttestation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeAttestations and only return the `id`
     * const employeeAttestationWithIdOnly = await prisma.employeeAttestation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeAttestationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeAttestationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeAttestationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeAttestation.
     * @param {EmployeeAttestationUpsertArgs} args - Arguments to update or create a EmployeeAttestation.
     * @example
     * // Update or create a EmployeeAttestation
     * const employeeAttestation = await prisma.employeeAttestation.upsert({
     *   create: {
     *     // ... data to create a EmployeeAttestation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeAttestation we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeAttestationUpsertArgs>(args: SelectSubset<T, EmployeeAttestationUpsertArgs<ExtArgs>>): Prisma__EmployeeAttestationClient<$Result.GetResult<Prisma.$EmployeeAttestationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeAttestations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttestationCountArgs} args - Arguments to filter EmployeeAttestations to count.
     * @example
     * // Count the number of EmployeeAttestations
     * const count = await prisma.employeeAttestation.count({
     *   where: {
     *     // ... the filter for the EmployeeAttestations we want to count
     *   }
     * })
    **/
    count<T extends EmployeeAttestationCountArgs>(
      args?: Subset<T, EmployeeAttestationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeAttestationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeAttestation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttestationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAttestationAggregateArgs>(args: Subset<T, EmployeeAttestationAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAttestationAggregateType<T>>

    /**
     * Group by EmployeeAttestation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAttestationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeAttestationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeAttestationGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeAttestationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeAttestationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeAttestationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeAttestation model
   */
  readonly fields: EmployeeAttestationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeAttestation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeAttestationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeAttestation model
   */
  interface EmployeeAttestationFieldRefs {
    readonly id: FieldRef<"EmployeeAttestation", 'String'>
    readonly employeeName: FieldRef<"EmployeeAttestation", 'String'>
    readonly employeeEmail: FieldRef<"EmployeeAttestation", 'String'>
    readonly policyTitle: FieldRef<"EmployeeAttestation", 'String'>
    readonly status: FieldRef<"EmployeeAttestation", 'String'>
    readonly signedAt: FieldRef<"EmployeeAttestation", 'DateTime'>
    readonly createdAt: FieldRef<"EmployeeAttestation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeAttestation findUnique
   */
  export type EmployeeAttestationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttestation
     */
    select?: EmployeeAttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttestation
     */
    omit?: EmployeeAttestationOmit<ExtArgs> | null
    /**
     * Filter, which EmployeeAttestation to fetch.
     */
    where: EmployeeAttestationWhereUniqueInput
  }

  /**
   * EmployeeAttestation findUniqueOrThrow
   */
  export type EmployeeAttestationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttestation
     */
    select?: EmployeeAttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttestation
     */
    omit?: EmployeeAttestationOmit<ExtArgs> | null
    /**
     * Filter, which EmployeeAttestation to fetch.
     */
    where: EmployeeAttestationWhereUniqueInput
  }

  /**
   * EmployeeAttestation findFirst
   */
  export type EmployeeAttestationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttestation
     */
    select?: EmployeeAttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttestation
     */
    omit?: EmployeeAttestationOmit<ExtArgs> | null
    /**
     * Filter, which EmployeeAttestation to fetch.
     */
    where?: EmployeeAttestationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeAttestations to fetch.
     */
    orderBy?: EmployeeAttestationOrderByWithRelationInput | EmployeeAttestationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeAttestations.
     */
    cursor?: EmployeeAttestationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeAttestations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeAttestations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeAttestations.
     */
    distinct?: EmployeeAttestationScalarFieldEnum | EmployeeAttestationScalarFieldEnum[]
  }

  /**
   * EmployeeAttestation findFirstOrThrow
   */
  export type EmployeeAttestationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttestation
     */
    select?: EmployeeAttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttestation
     */
    omit?: EmployeeAttestationOmit<ExtArgs> | null
    /**
     * Filter, which EmployeeAttestation to fetch.
     */
    where?: EmployeeAttestationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeAttestations to fetch.
     */
    orderBy?: EmployeeAttestationOrderByWithRelationInput | EmployeeAttestationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeAttestations.
     */
    cursor?: EmployeeAttestationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeAttestations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeAttestations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeAttestations.
     */
    distinct?: EmployeeAttestationScalarFieldEnum | EmployeeAttestationScalarFieldEnum[]
  }

  /**
   * EmployeeAttestation findMany
   */
  export type EmployeeAttestationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttestation
     */
    select?: EmployeeAttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttestation
     */
    omit?: EmployeeAttestationOmit<ExtArgs> | null
    /**
     * Filter, which EmployeeAttestations to fetch.
     */
    where?: EmployeeAttestationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeAttestations to fetch.
     */
    orderBy?: EmployeeAttestationOrderByWithRelationInput | EmployeeAttestationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeAttestations.
     */
    cursor?: EmployeeAttestationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeAttestations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeAttestations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeAttestations.
     */
    distinct?: EmployeeAttestationScalarFieldEnum | EmployeeAttestationScalarFieldEnum[]
  }

  /**
   * EmployeeAttestation create
   */
  export type EmployeeAttestationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttestation
     */
    select?: EmployeeAttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttestation
     */
    omit?: EmployeeAttestationOmit<ExtArgs> | null
    /**
     * The data needed to create a EmployeeAttestation.
     */
    data: XOR<EmployeeAttestationCreateInput, EmployeeAttestationUncheckedCreateInput>
  }

  /**
   * EmployeeAttestation createMany
   */
  export type EmployeeAttestationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeAttestations.
     */
    data: EmployeeAttestationCreateManyInput | EmployeeAttestationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeAttestation createManyAndReturn
   */
  export type EmployeeAttestationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttestation
     */
    select?: EmployeeAttestationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttestation
     */
    omit?: EmployeeAttestationOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeAttestations.
     */
    data: EmployeeAttestationCreateManyInput | EmployeeAttestationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeAttestation update
   */
  export type EmployeeAttestationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttestation
     */
    select?: EmployeeAttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttestation
     */
    omit?: EmployeeAttestationOmit<ExtArgs> | null
    /**
     * The data needed to update a EmployeeAttestation.
     */
    data: XOR<EmployeeAttestationUpdateInput, EmployeeAttestationUncheckedUpdateInput>
    /**
     * Choose, which EmployeeAttestation to update.
     */
    where: EmployeeAttestationWhereUniqueInput
  }

  /**
   * EmployeeAttestation updateMany
   */
  export type EmployeeAttestationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeAttestations.
     */
    data: XOR<EmployeeAttestationUpdateManyMutationInput, EmployeeAttestationUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeAttestations to update
     */
    where?: EmployeeAttestationWhereInput
    /**
     * Limit how many EmployeeAttestations to update.
     */
    limit?: number
  }

  /**
   * EmployeeAttestation updateManyAndReturn
   */
  export type EmployeeAttestationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttestation
     */
    select?: EmployeeAttestationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttestation
     */
    omit?: EmployeeAttestationOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeAttestations.
     */
    data: XOR<EmployeeAttestationUpdateManyMutationInput, EmployeeAttestationUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeAttestations to update
     */
    where?: EmployeeAttestationWhereInput
    /**
     * Limit how many EmployeeAttestations to update.
     */
    limit?: number
  }

  /**
   * EmployeeAttestation upsert
   */
  export type EmployeeAttestationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttestation
     */
    select?: EmployeeAttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttestation
     */
    omit?: EmployeeAttestationOmit<ExtArgs> | null
    /**
     * The filter to search for the EmployeeAttestation to update in case it exists.
     */
    where: EmployeeAttestationWhereUniqueInput
    /**
     * In case the EmployeeAttestation found by the `where` argument doesn't exist, create a new EmployeeAttestation with this data.
     */
    create: XOR<EmployeeAttestationCreateInput, EmployeeAttestationUncheckedCreateInput>
    /**
     * In case the EmployeeAttestation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeAttestationUpdateInput, EmployeeAttestationUncheckedUpdateInput>
  }

  /**
   * EmployeeAttestation delete
   */
  export type EmployeeAttestationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttestation
     */
    select?: EmployeeAttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttestation
     */
    omit?: EmployeeAttestationOmit<ExtArgs> | null
    /**
     * Filter which EmployeeAttestation to delete.
     */
    where: EmployeeAttestationWhereUniqueInput
  }

  /**
   * EmployeeAttestation deleteMany
   */
  export type EmployeeAttestationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeAttestations to delete
     */
    where?: EmployeeAttestationWhereInput
    /**
     * Limit how many EmployeeAttestations to delete.
     */
    limit?: number
  }

  /**
   * EmployeeAttestation without action
   */
  export type EmployeeAttestationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAttestation
     */
    select?: EmployeeAttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAttestation
     */
    omit?: EmployeeAttestationOmit<ExtArgs> | null
  }


  /**
   * Model ConnectorScanLog
   */

  export type AggregateConnectorScanLog = {
    _count: ConnectorScanLogCountAggregateOutputType | null
    _min: ConnectorScanLogMinAggregateOutputType | null
    _max: ConnectorScanLogMaxAggregateOutputType | null
  }

  export type ConnectorScanLogMinAggregateOutputType = {
    id: string | null
    connectorType: string | null
    status: string | null
    details: string | null
    createdAt: Date | null
  }

  export type ConnectorScanLogMaxAggregateOutputType = {
    id: string | null
    connectorType: string | null
    status: string | null
    details: string | null
    createdAt: Date | null
  }

  export type ConnectorScanLogCountAggregateOutputType = {
    id: number
    connectorType: number
    status: number
    details: number
    createdAt: number
    _all: number
  }


  export type ConnectorScanLogMinAggregateInputType = {
    id?: true
    connectorType?: true
    status?: true
    details?: true
    createdAt?: true
  }

  export type ConnectorScanLogMaxAggregateInputType = {
    id?: true
    connectorType?: true
    status?: true
    details?: true
    createdAt?: true
  }

  export type ConnectorScanLogCountAggregateInputType = {
    id?: true
    connectorType?: true
    status?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type ConnectorScanLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectorScanLog to aggregate.
     */
    where?: ConnectorScanLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectorScanLogs to fetch.
     */
    orderBy?: ConnectorScanLogOrderByWithRelationInput | ConnectorScanLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectorScanLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectorScanLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectorScanLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConnectorScanLogs
    **/
    _count?: true | ConnectorScanLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectorScanLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectorScanLogMaxAggregateInputType
  }

  export type GetConnectorScanLogAggregateType<T extends ConnectorScanLogAggregateArgs> = {
        [P in keyof T & keyof AggregateConnectorScanLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnectorScanLog[P]>
      : GetScalarType<T[P], AggregateConnectorScanLog[P]>
  }




  export type ConnectorScanLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectorScanLogWhereInput
    orderBy?: ConnectorScanLogOrderByWithAggregationInput | ConnectorScanLogOrderByWithAggregationInput[]
    by: ConnectorScanLogScalarFieldEnum[] | ConnectorScanLogScalarFieldEnum
    having?: ConnectorScanLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectorScanLogCountAggregateInputType | true
    _min?: ConnectorScanLogMinAggregateInputType
    _max?: ConnectorScanLogMaxAggregateInputType
  }

  export type ConnectorScanLogGroupByOutputType = {
    id: string
    connectorType: string
    status: string
    details: string
    createdAt: Date
    _count: ConnectorScanLogCountAggregateOutputType | null
    _min: ConnectorScanLogMinAggregateOutputType | null
    _max: ConnectorScanLogMaxAggregateOutputType | null
  }

  type GetConnectorScanLogGroupByPayload<T extends ConnectorScanLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectorScanLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectorScanLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectorScanLogGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectorScanLogGroupByOutputType[P]>
        }
      >
    >


  export type ConnectorScanLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connectorType?: boolean
    status?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["connectorScanLog"]>

  export type ConnectorScanLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connectorType?: boolean
    status?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["connectorScanLog"]>

  export type ConnectorScanLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connectorType?: boolean
    status?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["connectorScanLog"]>

  export type ConnectorScanLogSelectScalar = {
    id?: boolean
    connectorType?: boolean
    status?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type ConnectorScanLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "connectorType" | "status" | "details" | "createdAt", ExtArgs["result"]["connectorScanLog"]>

  export type $ConnectorScanLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConnectorScanLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      connectorType: string
      status: string
      details: string
      createdAt: Date
    }, ExtArgs["result"]["connectorScanLog"]>
    composites: {}
  }

  type ConnectorScanLogGetPayload<S extends boolean | null | undefined | ConnectorScanLogDefaultArgs> = $Result.GetResult<Prisma.$ConnectorScanLogPayload, S>

  type ConnectorScanLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectorScanLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectorScanLogCountAggregateInputType | true
    }

  export interface ConnectorScanLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConnectorScanLog'], meta: { name: 'ConnectorScanLog' } }
    /**
     * Find zero or one ConnectorScanLog that matches the filter.
     * @param {ConnectorScanLogFindUniqueArgs} args - Arguments to find a ConnectorScanLog
     * @example
     * // Get one ConnectorScanLog
     * const connectorScanLog = await prisma.connectorScanLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectorScanLogFindUniqueArgs>(args: SelectSubset<T, ConnectorScanLogFindUniqueArgs<ExtArgs>>): Prisma__ConnectorScanLogClient<$Result.GetResult<Prisma.$ConnectorScanLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConnectorScanLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectorScanLogFindUniqueOrThrowArgs} args - Arguments to find a ConnectorScanLog
     * @example
     * // Get one ConnectorScanLog
     * const connectorScanLog = await prisma.connectorScanLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectorScanLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectorScanLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectorScanLogClient<$Result.GetResult<Prisma.$ConnectorScanLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConnectorScanLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorScanLogFindFirstArgs} args - Arguments to find a ConnectorScanLog
     * @example
     * // Get one ConnectorScanLog
     * const connectorScanLog = await prisma.connectorScanLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectorScanLogFindFirstArgs>(args?: SelectSubset<T, ConnectorScanLogFindFirstArgs<ExtArgs>>): Prisma__ConnectorScanLogClient<$Result.GetResult<Prisma.$ConnectorScanLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConnectorScanLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorScanLogFindFirstOrThrowArgs} args - Arguments to find a ConnectorScanLog
     * @example
     * // Get one ConnectorScanLog
     * const connectorScanLog = await prisma.connectorScanLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectorScanLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectorScanLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectorScanLogClient<$Result.GetResult<Prisma.$ConnectorScanLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConnectorScanLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorScanLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConnectorScanLogs
     * const connectorScanLogs = await prisma.connectorScanLog.findMany()
     * 
     * // Get first 10 ConnectorScanLogs
     * const connectorScanLogs = await prisma.connectorScanLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectorScanLogWithIdOnly = await prisma.connectorScanLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectorScanLogFindManyArgs>(args?: SelectSubset<T, ConnectorScanLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectorScanLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConnectorScanLog.
     * @param {ConnectorScanLogCreateArgs} args - Arguments to create a ConnectorScanLog.
     * @example
     * // Create one ConnectorScanLog
     * const ConnectorScanLog = await prisma.connectorScanLog.create({
     *   data: {
     *     // ... data to create a ConnectorScanLog
     *   }
     * })
     * 
     */
    create<T extends ConnectorScanLogCreateArgs>(args: SelectSubset<T, ConnectorScanLogCreateArgs<ExtArgs>>): Prisma__ConnectorScanLogClient<$Result.GetResult<Prisma.$ConnectorScanLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConnectorScanLogs.
     * @param {ConnectorScanLogCreateManyArgs} args - Arguments to create many ConnectorScanLogs.
     * @example
     * // Create many ConnectorScanLogs
     * const connectorScanLog = await prisma.connectorScanLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectorScanLogCreateManyArgs>(args?: SelectSubset<T, ConnectorScanLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConnectorScanLogs and returns the data saved in the database.
     * @param {ConnectorScanLogCreateManyAndReturnArgs} args - Arguments to create many ConnectorScanLogs.
     * @example
     * // Create many ConnectorScanLogs
     * const connectorScanLog = await prisma.connectorScanLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConnectorScanLogs and only return the `id`
     * const connectorScanLogWithIdOnly = await prisma.connectorScanLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectorScanLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectorScanLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectorScanLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConnectorScanLog.
     * @param {ConnectorScanLogDeleteArgs} args - Arguments to delete one ConnectorScanLog.
     * @example
     * // Delete one ConnectorScanLog
     * const ConnectorScanLog = await prisma.connectorScanLog.delete({
     *   where: {
     *     // ... filter to delete one ConnectorScanLog
     *   }
     * })
     * 
     */
    delete<T extends ConnectorScanLogDeleteArgs>(args: SelectSubset<T, ConnectorScanLogDeleteArgs<ExtArgs>>): Prisma__ConnectorScanLogClient<$Result.GetResult<Prisma.$ConnectorScanLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConnectorScanLog.
     * @param {ConnectorScanLogUpdateArgs} args - Arguments to update one ConnectorScanLog.
     * @example
     * // Update one ConnectorScanLog
     * const connectorScanLog = await prisma.connectorScanLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectorScanLogUpdateArgs>(args: SelectSubset<T, ConnectorScanLogUpdateArgs<ExtArgs>>): Prisma__ConnectorScanLogClient<$Result.GetResult<Prisma.$ConnectorScanLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConnectorScanLogs.
     * @param {ConnectorScanLogDeleteManyArgs} args - Arguments to filter ConnectorScanLogs to delete.
     * @example
     * // Delete a few ConnectorScanLogs
     * const { count } = await prisma.connectorScanLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectorScanLogDeleteManyArgs>(args?: SelectSubset<T, ConnectorScanLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectorScanLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorScanLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConnectorScanLogs
     * const connectorScanLog = await prisma.connectorScanLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectorScanLogUpdateManyArgs>(args: SelectSubset<T, ConnectorScanLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectorScanLogs and returns the data updated in the database.
     * @param {ConnectorScanLogUpdateManyAndReturnArgs} args - Arguments to update many ConnectorScanLogs.
     * @example
     * // Update many ConnectorScanLogs
     * const connectorScanLog = await prisma.connectorScanLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConnectorScanLogs and only return the `id`
     * const connectorScanLogWithIdOnly = await prisma.connectorScanLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConnectorScanLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectorScanLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectorScanLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConnectorScanLog.
     * @param {ConnectorScanLogUpsertArgs} args - Arguments to update or create a ConnectorScanLog.
     * @example
     * // Update or create a ConnectorScanLog
     * const connectorScanLog = await prisma.connectorScanLog.upsert({
     *   create: {
     *     // ... data to create a ConnectorScanLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConnectorScanLog we want to update
     *   }
     * })
     */
    upsert<T extends ConnectorScanLogUpsertArgs>(args: SelectSubset<T, ConnectorScanLogUpsertArgs<ExtArgs>>): Prisma__ConnectorScanLogClient<$Result.GetResult<Prisma.$ConnectorScanLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConnectorScanLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorScanLogCountArgs} args - Arguments to filter ConnectorScanLogs to count.
     * @example
     * // Count the number of ConnectorScanLogs
     * const count = await prisma.connectorScanLog.count({
     *   where: {
     *     // ... the filter for the ConnectorScanLogs we want to count
     *   }
     * })
    **/
    count<T extends ConnectorScanLogCountArgs>(
      args?: Subset<T, ConnectorScanLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectorScanLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConnectorScanLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorScanLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConnectorScanLogAggregateArgs>(args: Subset<T, ConnectorScanLogAggregateArgs>): Prisma.PrismaPromise<GetConnectorScanLogAggregateType<T>>

    /**
     * Group by ConnectorScanLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorScanLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConnectorScanLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectorScanLogGroupByArgs['orderBy'] }
        : { orderBy?: ConnectorScanLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConnectorScanLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectorScanLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConnectorScanLog model
   */
  readonly fields: ConnectorScanLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConnectorScanLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectorScanLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConnectorScanLog model
   */
  interface ConnectorScanLogFieldRefs {
    readonly id: FieldRef<"ConnectorScanLog", 'String'>
    readonly connectorType: FieldRef<"ConnectorScanLog", 'String'>
    readonly status: FieldRef<"ConnectorScanLog", 'String'>
    readonly details: FieldRef<"ConnectorScanLog", 'String'>
    readonly createdAt: FieldRef<"ConnectorScanLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConnectorScanLog findUnique
   */
  export type ConnectorScanLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorScanLog
     */
    select?: ConnectorScanLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectorScanLog
     */
    omit?: ConnectorScanLogOmit<ExtArgs> | null
    /**
     * Filter, which ConnectorScanLog to fetch.
     */
    where: ConnectorScanLogWhereUniqueInput
  }

  /**
   * ConnectorScanLog findUniqueOrThrow
   */
  export type ConnectorScanLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorScanLog
     */
    select?: ConnectorScanLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectorScanLog
     */
    omit?: ConnectorScanLogOmit<ExtArgs> | null
    /**
     * Filter, which ConnectorScanLog to fetch.
     */
    where: ConnectorScanLogWhereUniqueInput
  }

  /**
   * ConnectorScanLog findFirst
   */
  export type ConnectorScanLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorScanLog
     */
    select?: ConnectorScanLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectorScanLog
     */
    omit?: ConnectorScanLogOmit<ExtArgs> | null
    /**
     * Filter, which ConnectorScanLog to fetch.
     */
    where?: ConnectorScanLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectorScanLogs to fetch.
     */
    orderBy?: ConnectorScanLogOrderByWithRelationInput | ConnectorScanLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectorScanLogs.
     */
    cursor?: ConnectorScanLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectorScanLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectorScanLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectorScanLogs.
     */
    distinct?: ConnectorScanLogScalarFieldEnum | ConnectorScanLogScalarFieldEnum[]
  }

  /**
   * ConnectorScanLog findFirstOrThrow
   */
  export type ConnectorScanLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorScanLog
     */
    select?: ConnectorScanLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectorScanLog
     */
    omit?: ConnectorScanLogOmit<ExtArgs> | null
    /**
     * Filter, which ConnectorScanLog to fetch.
     */
    where?: ConnectorScanLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectorScanLogs to fetch.
     */
    orderBy?: ConnectorScanLogOrderByWithRelationInput | ConnectorScanLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectorScanLogs.
     */
    cursor?: ConnectorScanLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectorScanLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectorScanLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectorScanLogs.
     */
    distinct?: ConnectorScanLogScalarFieldEnum | ConnectorScanLogScalarFieldEnum[]
  }

  /**
   * ConnectorScanLog findMany
   */
  export type ConnectorScanLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorScanLog
     */
    select?: ConnectorScanLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectorScanLog
     */
    omit?: ConnectorScanLogOmit<ExtArgs> | null
    /**
     * Filter, which ConnectorScanLogs to fetch.
     */
    where?: ConnectorScanLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectorScanLogs to fetch.
     */
    orderBy?: ConnectorScanLogOrderByWithRelationInput | ConnectorScanLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConnectorScanLogs.
     */
    cursor?: ConnectorScanLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectorScanLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectorScanLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectorScanLogs.
     */
    distinct?: ConnectorScanLogScalarFieldEnum | ConnectorScanLogScalarFieldEnum[]
  }

  /**
   * ConnectorScanLog create
   */
  export type ConnectorScanLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorScanLog
     */
    select?: ConnectorScanLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectorScanLog
     */
    omit?: ConnectorScanLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ConnectorScanLog.
     */
    data: XOR<ConnectorScanLogCreateInput, ConnectorScanLogUncheckedCreateInput>
  }

  /**
   * ConnectorScanLog createMany
   */
  export type ConnectorScanLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConnectorScanLogs.
     */
    data: ConnectorScanLogCreateManyInput | ConnectorScanLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConnectorScanLog createManyAndReturn
   */
  export type ConnectorScanLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorScanLog
     */
    select?: ConnectorScanLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectorScanLog
     */
    omit?: ConnectorScanLogOmit<ExtArgs> | null
    /**
     * The data used to create many ConnectorScanLogs.
     */
    data: ConnectorScanLogCreateManyInput | ConnectorScanLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConnectorScanLog update
   */
  export type ConnectorScanLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorScanLog
     */
    select?: ConnectorScanLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectorScanLog
     */
    omit?: ConnectorScanLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ConnectorScanLog.
     */
    data: XOR<ConnectorScanLogUpdateInput, ConnectorScanLogUncheckedUpdateInput>
    /**
     * Choose, which ConnectorScanLog to update.
     */
    where: ConnectorScanLogWhereUniqueInput
  }

  /**
   * ConnectorScanLog updateMany
   */
  export type ConnectorScanLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConnectorScanLogs.
     */
    data: XOR<ConnectorScanLogUpdateManyMutationInput, ConnectorScanLogUncheckedUpdateManyInput>
    /**
     * Filter which ConnectorScanLogs to update
     */
    where?: ConnectorScanLogWhereInput
    /**
     * Limit how many ConnectorScanLogs to update.
     */
    limit?: number
  }

  /**
   * ConnectorScanLog updateManyAndReturn
   */
  export type ConnectorScanLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorScanLog
     */
    select?: ConnectorScanLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectorScanLog
     */
    omit?: ConnectorScanLogOmit<ExtArgs> | null
    /**
     * The data used to update ConnectorScanLogs.
     */
    data: XOR<ConnectorScanLogUpdateManyMutationInput, ConnectorScanLogUncheckedUpdateManyInput>
    /**
     * Filter which ConnectorScanLogs to update
     */
    where?: ConnectorScanLogWhereInput
    /**
     * Limit how many ConnectorScanLogs to update.
     */
    limit?: number
  }

  /**
   * ConnectorScanLog upsert
   */
  export type ConnectorScanLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorScanLog
     */
    select?: ConnectorScanLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectorScanLog
     */
    omit?: ConnectorScanLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ConnectorScanLog to update in case it exists.
     */
    where: ConnectorScanLogWhereUniqueInput
    /**
     * In case the ConnectorScanLog found by the `where` argument doesn't exist, create a new ConnectorScanLog with this data.
     */
    create: XOR<ConnectorScanLogCreateInput, ConnectorScanLogUncheckedCreateInput>
    /**
     * In case the ConnectorScanLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectorScanLogUpdateInput, ConnectorScanLogUncheckedUpdateInput>
  }

  /**
   * ConnectorScanLog delete
   */
  export type ConnectorScanLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorScanLog
     */
    select?: ConnectorScanLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectorScanLog
     */
    omit?: ConnectorScanLogOmit<ExtArgs> | null
    /**
     * Filter which ConnectorScanLog to delete.
     */
    where: ConnectorScanLogWhereUniqueInput
  }

  /**
   * ConnectorScanLog deleteMany
   */
  export type ConnectorScanLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectorScanLogs to delete
     */
    where?: ConnectorScanLogWhereInput
    /**
     * Limit how many ConnectorScanLogs to delete.
     */
    limit?: number
  }

  /**
   * ConnectorScanLog without action
   */
  export type ConnectorScanLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectorScanLog
     */
    select?: ConnectorScanLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectorScanLog
     */
    omit?: ConnectorScanLogOmit<ExtArgs> | null
  }


  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    score: number | null
  }

  export type VendorSumAggregateOutputType = {
    score: number | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    name: string | null
    securityTier: string | null
    complianceStatus: string | null
    contactEmail: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    securityTier: string | null
    complianceStatus: string | null
    contactEmail: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    name: number
    securityTier: number
    complianceStatus: number
    contactEmail: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    score?: true
  }

  export type VendorSumAggregateInputType = {
    score?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    name?: true
    securityTier?: true
    complianceStatus?: true
    contactEmail?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    name?: true
    securityTier?: true
    complianceStatus?: true
    contactEmail?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    name?: true
    securityTier?: true
    complianceStatus?: true
    contactEmail?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: string
    name: string
    securityTier: string
    complianceStatus: string
    contactEmail: string
    score: number
    createdAt: Date
    updatedAt: Date
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    securityTier?: boolean
    complianceStatus?: boolean
    contactEmail?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    securityTier?: boolean
    complianceStatus?: boolean
    contactEmail?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    securityTier?: boolean
    complianceStatus?: boolean
    contactEmail?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    id?: boolean
    name?: boolean
    securityTier?: boolean
    complianceStatus?: boolean
    contactEmail?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "securityTier" | "complianceStatus" | "contactEmail" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["vendor"]>

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      securityTier: string
      complianceStatus: string
      contactEmail: string
      score: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {VendorCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors and returns the data updated in the database.
     * @param {VendorUpdateManyAndReturnArgs} args - Arguments to update many Vendors.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendorUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'String'>
    readonly name: FieldRef<"Vendor", 'String'>
    readonly securityTier: FieldRef<"Vendor", 'String'>
    readonly complianceStatus: FieldRef<"Vendor", 'String'>
    readonly contactEmail: FieldRef<"Vendor", 'String'>
    readonly score: FieldRef<"Vendor", 'Int'>
    readonly createdAt: FieldRef<"Vendor", 'DateTime'>
    readonly updatedAt: FieldRef<"Vendor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor createManyAndReturn
   */
  export type VendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor updateManyAndReturn
   */
  export type VendorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
  }


  /**
   * Model AuditComment
   */

  export type AggregateAuditComment = {
    _count: AuditCommentCountAggregateOutputType | null
    _min: AuditCommentMinAggregateOutputType | null
    _max: AuditCommentMaxAggregateOutputType | null
  }

  export type AuditCommentMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    author: string | null
    text: string | null
    createdAt: Date | null
  }

  export type AuditCommentMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    author: string | null
    text: string | null
    createdAt: Date | null
  }

  export type AuditCommentCountAggregateOutputType = {
    id: number
    questionId: number
    author: number
    text: number
    createdAt: number
    _all: number
  }


  export type AuditCommentMinAggregateInputType = {
    id?: true
    questionId?: true
    author?: true
    text?: true
    createdAt?: true
  }

  export type AuditCommentMaxAggregateInputType = {
    id?: true
    questionId?: true
    author?: true
    text?: true
    createdAt?: true
  }

  export type AuditCommentCountAggregateInputType = {
    id?: true
    questionId?: true
    author?: true
    text?: true
    createdAt?: true
    _all?: true
  }

  export type AuditCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditComment to aggregate.
     */
    where?: AuditCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditComments to fetch.
     */
    orderBy?: AuditCommentOrderByWithRelationInput | AuditCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditComments
    **/
    _count?: true | AuditCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditCommentMaxAggregateInputType
  }

  export type GetAuditCommentAggregateType<T extends AuditCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditComment[P]>
      : GetScalarType<T[P], AggregateAuditComment[P]>
  }




  export type AuditCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditCommentWhereInput
    orderBy?: AuditCommentOrderByWithAggregationInput | AuditCommentOrderByWithAggregationInput[]
    by: AuditCommentScalarFieldEnum[] | AuditCommentScalarFieldEnum
    having?: AuditCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditCommentCountAggregateInputType | true
    _min?: AuditCommentMinAggregateInputType
    _max?: AuditCommentMaxAggregateInputType
  }

  export type AuditCommentGroupByOutputType = {
    id: string
    questionId: string
    author: string
    text: string
    createdAt: Date
    _count: AuditCommentCountAggregateOutputType | null
    _min: AuditCommentMinAggregateOutputType | null
    _max: AuditCommentMaxAggregateOutputType | null
  }

  type GetAuditCommentGroupByPayload<T extends AuditCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditCommentGroupByOutputType[P]>
            : GetScalarType<T[P], AuditCommentGroupByOutputType[P]>
        }
      >
    >


  export type AuditCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    author?: boolean
    text?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditComment"]>

  export type AuditCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    author?: boolean
    text?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditComment"]>

  export type AuditCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    author?: boolean
    text?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditComment"]>

  export type AuditCommentSelectScalar = {
    id?: boolean
    questionId?: boolean
    author?: boolean
    text?: boolean
    createdAt?: boolean
  }

  export type AuditCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "author" | "text" | "createdAt", ExtArgs["result"]["auditComment"]>
  export type AuditCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AuditCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AuditCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AuditCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditComment"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      author: string
      text: string
      createdAt: Date
    }, ExtArgs["result"]["auditComment"]>
    composites: {}
  }

  type AuditCommentGetPayload<S extends boolean | null | undefined | AuditCommentDefaultArgs> = $Result.GetResult<Prisma.$AuditCommentPayload, S>

  type AuditCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditCommentCountAggregateInputType | true
    }

  export interface AuditCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditComment'], meta: { name: 'AuditComment' } }
    /**
     * Find zero or one AuditComment that matches the filter.
     * @param {AuditCommentFindUniqueArgs} args - Arguments to find a AuditComment
     * @example
     * // Get one AuditComment
     * const auditComment = await prisma.auditComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditCommentFindUniqueArgs>(args: SelectSubset<T, AuditCommentFindUniqueArgs<ExtArgs>>): Prisma__AuditCommentClient<$Result.GetResult<Prisma.$AuditCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditCommentFindUniqueOrThrowArgs} args - Arguments to find a AuditComment
     * @example
     * // Get one AuditComment
     * const auditComment = await prisma.auditComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditCommentClient<$Result.GetResult<Prisma.$AuditCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditCommentFindFirstArgs} args - Arguments to find a AuditComment
     * @example
     * // Get one AuditComment
     * const auditComment = await prisma.auditComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditCommentFindFirstArgs>(args?: SelectSubset<T, AuditCommentFindFirstArgs<ExtArgs>>): Prisma__AuditCommentClient<$Result.GetResult<Prisma.$AuditCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditCommentFindFirstOrThrowArgs} args - Arguments to find a AuditComment
     * @example
     * // Get one AuditComment
     * const auditComment = await prisma.auditComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditCommentClient<$Result.GetResult<Prisma.$AuditCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditComments
     * const auditComments = await prisma.auditComment.findMany()
     * 
     * // Get first 10 AuditComments
     * const auditComments = await prisma.auditComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditCommentWithIdOnly = await prisma.auditComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditCommentFindManyArgs>(args?: SelectSubset<T, AuditCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditComment.
     * @param {AuditCommentCreateArgs} args - Arguments to create a AuditComment.
     * @example
     * // Create one AuditComment
     * const AuditComment = await prisma.auditComment.create({
     *   data: {
     *     // ... data to create a AuditComment
     *   }
     * })
     * 
     */
    create<T extends AuditCommentCreateArgs>(args: SelectSubset<T, AuditCommentCreateArgs<ExtArgs>>): Prisma__AuditCommentClient<$Result.GetResult<Prisma.$AuditCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditComments.
     * @param {AuditCommentCreateManyArgs} args - Arguments to create many AuditComments.
     * @example
     * // Create many AuditComments
     * const auditComment = await prisma.auditComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditCommentCreateManyArgs>(args?: SelectSubset<T, AuditCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditComments and returns the data saved in the database.
     * @param {AuditCommentCreateManyAndReturnArgs} args - Arguments to create many AuditComments.
     * @example
     * // Create many AuditComments
     * const auditComment = await prisma.auditComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditComments and only return the `id`
     * const auditCommentWithIdOnly = await prisma.auditComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditComment.
     * @param {AuditCommentDeleteArgs} args - Arguments to delete one AuditComment.
     * @example
     * // Delete one AuditComment
     * const AuditComment = await prisma.auditComment.delete({
     *   where: {
     *     // ... filter to delete one AuditComment
     *   }
     * })
     * 
     */
    delete<T extends AuditCommentDeleteArgs>(args: SelectSubset<T, AuditCommentDeleteArgs<ExtArgs>>): Prisma__AuditCommentClient<$Result.GetResult<Prisma.$AuditCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditComment.
     * @param {AuditCommentUpdateArgs} args - Arguments to update one AuditComment.
     * @example
     * // Update one AuditComment
     * const auditComment = await prisma.auditComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditCommentUpdateArgs>(args: SelectSubset<T, AuditCommentUpdateArgs<ExtArgs>>): Prisma__AuditCommentClient<$Result.GetResult<Prisma.$AuditCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditComments.
     * @param {AuditCommentDeleteManyArgs} args - Arguments to filter AuditComments to delete.
     * @example
     * // Delete a few AuditComments
     * const { count } = await prisma.auditComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditCommentDeleteManyArgs>(args?: SelectSubset<T, AuditCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditComments
     * const auditComment = await prisma.auditComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditCommentUpdateManyArgs>(args: SelectSubset<T, AuditCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditComments and returns the data updated in the database.
     * @param {AuditCommentUpdateManyAndReturnArgs} args - Arguments to update many AuditComments.
     * @example
     * // Update many AuditComments
     * const auditComment = await prisma.auditComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditComments and only return the `id`
     * const auditCommentWithIdOnly = await prisma.auditComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditComment.
     * @param {AuditCommentUpsertArgs} args - Arguments to update or create a AuditComment.
     * @example
     * // Update or create a AuditComment
     * const auditComment = await prisma.auditComment.upsert({
     *   create: {
     *     // ... data to create a AuditComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditComment we want to update
     *   }
     * })
     */
    upsert<T extends AuditCommentUpsertArgs>(args: SelectSubset<T, AuditCommentUpsertArgs<ExtArgs>>): Prisma__AuditCommentClient<$Result.GetResult<Prisma.$AuditCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditCommentCountArgs} args - Arguments to filter AuditComments to count.
     * @example
     * // Count the number of AuditComments
     * const count = await prisma.auditComment.count({
     *   where: {
     *     // ... the filter for the AuditComments we want to count
     *   }
     * })
    **/
    count<T extends AuditCommentCountArgs>(
      args?: Subset<T, AuditCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditCommentAggregateArgs>(args: Subset<T, AuditCommentAggregateArgs>): Prisma.PrismaPromise<GetAuditCommentAggregateType<T>>

    /**
     * Group by AuditComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditCommentGroupByArgs['orderBy'] }
        : { orderBy?: AuditCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditComment model
   */
  readonly fields: AuditCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditComment model
   */
  interface AuditCommentFieldRefs {
    readonly id: FieldRef<"AuditComment", 'String'>
    readonly questionId: FieldRef<"AuditComment", 'String'>
    readonly author: FieldRef<"AuditComment", 'String'>
    readonly text: FieldRef<"AuditComment", 'String'>
    readonly createdAt: FieldRef<"AuditComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditComment findUnique
   */
  export type AuditCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentInclude<ExtArgs> | null
    /**
     * Filter, which AuditComment to fetch.
     */
    where: AuditCommentWhereUniqueInput
  }

  /**
   * AuditComment findUniqueOrThrow
   */
  export type AuditCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentInclude<ExtArgs> | null
    /**
     * Filter, which AuditComment to fetch.
     */
    where: AuditCommentWhereUniqueInput
  }

  /**
   * AuditComment findFirst
   */
  export type AuditCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentInclude<ExtArgs> | null
    /**
     * Filter, which AuditComment to fetch.
     */
    where?: AuditCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditComments to fetch.
     */
    orderBy?: AuditCommentOrderByWithRelationInput | AuditCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditComments.
     */
    cursor?: AuditCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditComments.
     */
    distinct?: AuditCommentScalarFieldEnum | AuditCommentScalarFieldEnum[]
  }

  /**
   * AuditComment findFirstOrThrow
   */
  export type AuditCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentInclude<ExtArgs> | null
    /**
     * Filter, which AuditComment to fetch.
     */
    where?: AuditCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditComments to fetch.
     */
    orderBy?: AuditCommentOrderByWithRelationInput | AuditCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditComments.
     */
    cursor?: AuditCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditComments.
     */
    distinct?: AuditCommentScalarFieldEnum | AuditCommentScalarFieldEnum[]
  }

  /**
   * AuditComment findMany
   */
  export type AuditCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentInclude<ExtArgs> | null
    /**
     * Filter, which AuditComments to fetch.
     */
    where?: AuditCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditComments to fetch.
     */
    orderBy?: AuditCommentOrderByWithRelationInput | AuditCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditComments.
     */
    cursor?: AuditCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditComments.
     */
    distinct?: AuditCommentScalarFieldEnum | AuditCommentScalarFieldEnum[]
  }

  /**
   * AuditComment create
   */
  export type AuditCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditComment.
     */
    data: XOR<AuditCommentCreateInput, AuditCommentUncheckedCreateInput>
  }

  /**
   * AuditComment createMany
   */
  export type AuditCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditComments.
     */
    data: AuditCommentCreateManyInput | AuditCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditComment createManyAndReturn
   */
  export type AuditCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * The data used to create many AuditComments.
     */
    data: AuditCommentCreateManyInput | AuditCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditComment update
   */
  export type AuditCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditComment.
     */
    data: XOR<AuditCommentUpdateInput, AuditCommentUncheckedUpdateInput>
    /**
     * Choose, which AuditComment to update.
     */
    where: AuditCommentWhereUniqueInput
  }

  /**
   * AuditComment updateMany
   */
  export type AuditCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditComments.
     */
    data: XOR<AuditCommentUpdateManyMutationInput, AuditCommentUncheckedUpdateManyInput>
    /**
     * Filter which AuditComments to update
     */
    where?: AuditCommentWhereInput
    /**
     * Limit how many AuditComments to update.
     */
    limit?: number
  }

  /**
   * AuditComment updateManyAndReturn
   */
  export type AuditCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * The data used to update AuditComments.
     */
    data: XOR<AuditCommentUpdateManyMutationInput, AuditCommentUncheckedUpdateManyInput>
    /**
     * Filter which AuditComments to update
     */
    where?: AuditCommentWhereInput
    /**
     * Limit how many AuditComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditComment upsert
   */
  export type AuditCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditComment to update in case it exists.
     */
    where: AuditCommentWhereUniqueInput
    /**
     * In case the AuditComment found by the `where` argument doesn't exist, create a new AuditComment with this data.
     */
    create: XOR<AuditCommentCreateInput, AuditCommentUncheckedCreateInput>
    /**
     * In case the AuditComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditCommentUpdateInput, AuditCommentUncheckedUpdateInput>
  }

  /**
   * AuditComment delete
   */
  export type AuditCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentInclude<ExtArgs> | null
    /**
     * Filter which AuditComment to delete.
     */
    where: AuditCommentWhereUniqueInput
  }

  /**
   * AuditComment deleteMany
   */
  export type AuditCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditComments to delete
     */
    where?: AuditCommentWhereInput
    /**
     * Limit how many AuditComments to delete.
     */
    limit?: number
  }

  /**
   * AuditComment without action
   */
  export type AuditCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditComment
     */
    select?: AuditCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditComment
     */
    omit?: AuditCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditCommentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const AssessmentScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    score: 'score',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssessmentScalarFieldEnum = (typeof AssessmentScalarFieldEnum)[keyof typeof AssessmentScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    domain: 'domain',
    text: 'text',
    requiresDoc: 'requiresDoc'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    assessmentId: 'assessmentId',
    questionId: 'questionId',
    response: 'response',
    evidenceUrl: 'evidenceUrl',
    evidenceText: 'evidenceText',
    aiVerified: 'aiVerified',
    aiReasoning: 'aiReasoning',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const FrameworkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type FrameworkScalarFieldEnum = (typeof FrameworkScalarFieldEnum)[keyof typeof FrameworkScalarFieldEnum]


  export const MappingScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    frameworkId: 'frameworkId',
    clause: 'clause',
    description: 'description'
  };

  export type MappingScalarFieldEnum = (typeof MappingScalarFieldEnum)[keyof typeof MappingScalarFieldEnum]


  export const PolicyDocumentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PolicyDocumentScalarFieldEnum = (typeof PolicyDocumentScalarFieldEnum)[keyof typeof PolicyDocumentScalarFieldEnum]


  export const RemediationTaskScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    assignedTo: 'assignedTo',
    dueDate: 'dueDate',
    status: 'status',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RemediationTaskScalarFieldEnum = (typeof RemediationTaskScalarFieldEnum)[keyof typeof RemediationTaskScalarFieldEnum]


  export const RiskRegisterScalarFieldEnum: {
    id: 'id',
    title: 'title',
    threat: 'threat',
    likelihood: 'likelihood',
    impact: 'impact',
    mitigation: 'mitigation',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RiskRegisterScalarFieldEnum = (typeof RiskRegisterScalarFieldEnum)[keyof typeof RiskRegisterScalarFieldEnum]


  export const SecurityAlertScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    source: 'source',
    severity: 'severity',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SecurityAlertScalarFieldEnum = (typeof SecurityAlertScalarFieldEnum)[keyof typeof SecurityAlertScalarFieldEnum]


  export const EmployeeAttestationScalarFieldEnum: {
    id: 'id',
    employeeName: 'employeeName',
    employeeEmail: 'employeeEmail',
    policyTitle: 'policyTitle',
    status: 'status',
    signedAt: 'signedAt',
    createdAt: 'createdAt'
  };

  export type EmployeeAttestationScalarFieldEnum = (typeof EmployeeAttestationScalarFieldEnum)[keyof typeof EmployeeAttestationScalarFieldEnum]


  export const ConnectorScanLogScalarFieldEnum: {
    id: 'id',
    connectorType: 'connectorType',
    status: 'status',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type ConnectorScanLogScalarFieldEnum = (typeof ConnectorScanLogScalarFieldEnum)[keyof typeof ConnectorScanLogScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    securityTier: 'securityTier',
    complianceStatus: 'complianceStatus',
    contactEmail: 'contactEmail',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const AuditCommentScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    author: 'author',
    text: 'text',
    createdAt: 'createdAt'
  };

  export type AuditCommentScalarFieldEnum = (typeof AuditCommentScalarFieldEnum)[keyof typeof AuditCommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    assessments?: AssessmentListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assessments?: AssessmentOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    assessments?: AssessmentListRelationFilter
  }, "id" | "name">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type AssessmentWhereInput = {
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    id?: StringFilter<"Assessment"> | string
    organizationId?: StringFilter<"Assessment"> | string
    score?: FloatFilter<"Assessment"> | number
    status?: StringFilter<"Assessment"> | string
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type AssessmentOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    score?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type AssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    organizationId?: StringFilter<"Assessment"> | string
    score?: FloatFilter<"Assessment"> | number
    status?: StringFilter<"Assessment"> | string
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type AssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    score?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssessmentCountOrderByAggregateInput
    _avg?: AssessmentAvgOrderByAggregateInput
    _max?: AssessmentMaxOrderByAggregateInput
    _min?: AssessmentMinOrderByAggregateInput
    _sum?: AssessmentSumOrderByAggregateInput
  }

  export type AssessmentScalarWhereWithAggregatesInput = {
    AND?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    OR?: AssessmentScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assessment"> | string
    organizationId?: StringWithAggregatesFilter<"Assessment"> | string
    score?: FloatWithAggregatesFilter<"Assessment"> | number
    status?: StringWithAggregatesFilter<"Assessment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    domain?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    requiresDoc?: BoolFilter<"Question"> | boolean
    answers?: AnswerListRelationFilter
    mappings?: MappingListRelationFilter
    remediationTask?: XOR<RemediationTaskNullableScalarRelationFilter, RemediationTaskWhereInput> | null
    auditComments?: AuditCommentListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    text?: SortOrder
    requiresDoc?: SortOrder
    answers?: AnswerOrderByRelationAggregateInput
    mappings?: MappingOrderByRelationAggregateInput
    remediationTask?: RemediationTaskOrderByWithRelationInput
    auditComments?: AuditCommentOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    domain?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    requiresDoc?: BoolFilter<"Question"> | boolean
    answers?: AnswerListRelationFilter
    mappings?: MappingListRelationFilter
    remediationTask?: XOR<RemediationTaskNullableScalarRelationFilter, RemediationTaskWhereInput> | null
    auditComments?: AuditCommentListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    text?: SortOrder
    requiresDoc?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    domain?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    requiresDoc?: BoolWithAggregatesFilter<"Question"> | boolean
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    assessmentId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    response?: StringFilter<"Answer"> | string
    evidenceUrl?: StringNullableFilter<"Answer"> | string | null
    evidenceText?: StringNullableFilter<"Answer"> | string | null
    aiVerified?: BoolNullableFilter<"Answer"> | boolean | null
    aiReasoning?: StringNullableFilter<"Answer"> | string | null
    verifiedAt?: DateTimeNullableFilter<"Answer"> | Date | string | null
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    assessment?: XOR<AssessmentScalarRelationFilter, AssessmentWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionId?: SortOrder
    response?: SortOrder
    evidenceUrl?: SortOrderInput | SortOrder
    evidenceText?: SortOrderInput | SortOrder
    aiVerified?: SortOrderInput | SortOrder
    aiReasoning?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assessment?: AssessmentOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assessmentId_questionId?: AnswerAssessmentIdQuestionIdCompoundUniqueInput
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    assessmentId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    response?: StringFilter<"Answer"> | string
    evidenceUrl?: StringNullableFilter<"Answer"> | string | null
    evidenceText?: StringNullableFilter<"Answer"> | string | null
    aiVerified?: BoolNullableFilter<"Answer"> | boolean | null
    aiReasoning?: StringNullableFilter<"Answer"> | string | null
    verifiedAt?: DateTimeNullableFilter<"Answer"> | Date | string | null
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    assessment?: XOR<AssessmentScalarRelationFilter, AssessmentWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "assessmentId_questionId">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionId?: SortOrder
    response?: SortOrder
    evidenceUrl?: SortOrderInput | SortOrder
    evidenceText?: SortOrderInput | SortOrder
    aiVerified?: SortOrderInput | SortOrder
    aiReasoning?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    assessmentId?: StringWithAggregatesFilter<"Answer"> | string
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    response?: StringWithAggregatesFilter<"Answer"> | string
    evidenceUrl?: StringNullableWithAggregatesFilter<"Answer"> | string | null
    evidenceText?: StringNullableWithAggregatesFilter<"Answer"> | string | null
    aiVerified?: BoolNullableWithAggregatesFilter<"Answer"> | boolean | null
    aiReasoning?: StringNullableWithAggregatesFilter<"Answer"> | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Answer"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
  }

  export type FrameworkWhereInput = {
    AND?: FrameworkWhereInput | FrameworkWhereInput[]
    OR?: FrameworkWhereInput[]
    NOT?: FrameworkWhereInput | FrameworkWhereInput[]
    id?: StringFilter<"Framework"> | string
    name?: StringFilter<"Framework"> | string
    description?: StringFilter<"Framework"> | string
    mappings?: MappingListRelationFilter
  }

  export type FrameworkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mappings?: MappingOrderByRelationAggregateInput
  }

  export type FrameworkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: FrameworkWhereInput | FrameworkWhereInput[]
    OR?: FrameworkWhereInput[]
    NOT?: FrameworkWhereInput | FrameworkWhereInput[]
    description?: StringFilter<"Framework"> | string
    mappings?: MappingListRelationFilter
  }, "id" | "name">

  export type FrameworkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: FrameworkCountOrderByAggregateInput
    _max?: FrameworkMaxOrderByAggregateInput
    _min?: FrameworkMinOrderByAggregateInput
  }

  export type FrameworkScalarWhereWithAggregatesInput = {
    AND?: FrameworkScalarWhereWithAggregatesInput | FrameworkScalarWhereWithAggregatesInput[]
    OR?: FrameworkScalarWhereWithAggregatesInput[]
    NOT?: FrameworkScalarWhereWithAggregatesInput | FrameworkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Framework"> | string
    name?: StringWithAggregatesFilter<"Framework"> | string
    description?: StringWithAggregatesFilter<"Framework"> | string
  }

  export type MappingWhereInput = {
    AND?: MappingWhereInput | MappingWhereInput[]
    OR?: MappingWhereInput[]
    NOT?: MappingWhereInput | MappingWhereInput[]
    id?: StringFilter<"Mapping"> | string
    questionId?: StringFilter<"Mapping"> | string
    frameworkId?: StringFilter<"Mapping"> | string
    clause?: StringFilter<"Mapping"> | string
    description?: StringFilter<"Mapping"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    framework?: XOR<FrameworkScalarRelationFilter, FrameworkWhereInput>
  }

  export type MappingOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    frameworkId?: SortOrder
    clause?: SortOrder
    description?: SortOrder
    question?: QuestionOrderByWithRelationInput
    framework?: FrameworkOrderByWithRelationInput
  }

  export type MappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MappingWhereInput | MappingWhereInput[]
    OR?: MappingWhereInput[]
    NOT?: MappingWhereInput | MappingWhereInput[]
    questionId?: StringFilter<"Mapping"> | string
    frameworkId?: StringFilter<"Mapping"> | string
    clause?: StringFilter<"Mapping"> | string
    description?: StringFilter<"Mapping"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    framework?: XOR<FrameworkScalarRelationFilter, FrameworkWhereInput>
  }, "id">

  export type MappingOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    frameworkId?: SortOrder
    clause?: SortOrder
    description?: SortOrder
    _count?: MappingCountOrderByAggregateInput
    _max?: MappingMaxOrderByAggregateInput
    _min?: MappingMinOrderByAggregateInput
  }

  export type MappingScalarWhereWithAggregatesInput = {
    AND?: MappingScalarWhereWithAggregatesInput | MappingScalarWhereWithAggregatesInput[]
    OR?: MappingScalarWhereWithAggregatesInput[]
    NOT?: MappingScalarWhereWithAggregatesInput | MappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mapping"> | string
    questionId?: StringWithAggregatesFilter<"Mapping"> | string
    frameworkId?: StringWithAggregatesFilter<"Mapping"> | string
    clause?: StringWithAggregatesFilter<"Mapping"> | string
    description?: StringWithAggregatesFilter<"Mapping"> | string
  }

  export type PolicyDocumentWhereInput = {
    AND?: PolicyDocumentWhereInput | PolicyDocumentWhereInput[]
    OR?: PolicyDocumentWhereInput[]
    NOT?: PolicyDocumentWhereInput | PolicyDocumentWhereInput[]
    id?: StringFilter<"PolicyDocument"> | string
    title?: StringFilter<"PolicyDocument"> | string
    content?: StringFilter<"PolicyDocument"> | string
    createdAt?: DateTimeFilter<"PolicyDocument"> | Date | string
    updatedAt?: DateTimeFilter<"PolicyDocument"> | Date | string
  }

  export type PolicyDocumentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: PolicyDocumentWhereInput | PolicyDocumentWhereInput[]
    OR?: PolicyDocumentWhereInput[]
    NOT?: PolicyDocumentWhereInput | PolicyDocumentWhereInput[]
    content?: StringFilter<"PolicyDocument"> | string
    createdAt?: DateTimeFilter<"PolicyDocument"> | Date | string
    updatedAt?: DateTimeFilter<"PolicyDocument"> | Date | string
  }, "id" | "title">

  export type PolicyDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PolicyDocumentCountOrderByAggregateInput
    _max?: PolicyDocumentMaxOrderByAggregateInput
    _min?: PolicyDocumentMinOrderByAggregateInput
  }

  export type PolicyDocumentScalarWhereWithAggregatesInput = {
    AND?: PolicyDocumentScalarWhereWithAggregatesInput | PolicyDocumentScalarWhereWithAggregatesInput[]
    OR?: PolicyDocumentScalarWhereWithAggregatesInput[]
    NOT?: PolicyDocumentScalarWhereWithAggregatesInput | PolicyDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PolicyDocument"> | string
    title?: StringWithAggregatesFilter<"PolicyDocument"> | string
    content?: StringWithAggregatesFilter<"PolicyDocument"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PolicyDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PolicyDocument"> | Date | string
  }

  export type RemediationTaskWhereInput = {
    AND?: RemediationTaskWhereInput | RemediationTaskWhereInput[]
    OR?: RemediationTaskWhereInput[]
    NOT?: RemediationTaskWhereInput | RemediationTaskWhereInput[]
    id?: StringFilter<"RemediationTask"> | string
    questionId?: StringFilter<"RemediationTask"> | string
    assignedTo?: StringNullableFilter<"RemediationTask"> | string | null
    dueDate?: DateTimeNullableFilter<"RemediationTask"> | Date | string | null
    status?: StringFilter<"RemediationTask"> | string
    priority?: StringFilter<"RemediationTask"> | string
    createdAt?: DateTimeFilter<"RemediationTask"> | Date | string
    updatedAt?: DateTimeFilter<"RemediationTask"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type RemediationTaskOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type RemediationTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    questionId?: string
    AND?: RemediationTaskWhereInput | RemediationTaskWhereInput[]
    OR?: RemediationTaskWhereInput[]
    NOT?: RemediationTaskWhereInput | RemediationTaskWhereInput[]
    assignedTo?: StringNullableFilter<"RemediationTask"> | string | null
    dueDate?: DateTimeNullableFilter<"RemediationTask"> | Date | string | null
    status?: StringFilter<"RemediationTask"> | string
    priority?: StringFilter<"RemediationTask"> | string
    createdAt?: DateTimeFilter<"RemediationTask"> | Date | string
    updatedAt?: DateTimeFilter<"RemediationTask"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "questionId">

  export type RemediationTaskOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RemediationTaskCountOrderByAggregateInput
    _max?: RemediationTaskMaxOrderByAggregateInput
    _min?: RemediationTaskMinOrderByAggregateInput
  }

  export type RemediationTaskScalarWhereWithAggregatesInput = {
    AND?: RemediationTaskScalarWhereWithAggregatesInput | RemediationTaskScalarWhereWithAggregatesInput[]
    OR?: RemediationTaskScalarWhereWithAggregatesInput[]
    NOT?: RemediationTaskScalarWhereWithAggregatesInput | RemediationTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RemediationTask"> | string
    questionId?: StringWithAggregatesFilter<"RemediationTask"> | string
    assignedTo?: StringNullableWithAggregatesFilter<"RemediationTask"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"RemediationTask"> | Date | string | null
    status?: StringWithAggregatesFilter<"RemediationTask"> | string
    priority?: StringWithAggregatesFilter<"RemediationTask"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RemediationTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RemediationTask"> | Date | string
  }

  export type RiskRegisterWhereInput = {
    AND?: RiskRegisterWhereInput | RiskRegisterWhereInput[]
    OR?: RiskRegisterWhereInput[]
    NOT?: RiskRegisterWhereInput | RiskRegisterWhereInput[]
    id?: StringFilter<"RiskRegister"> | string
    title?: StringFilter<"RiskRegister"> | string
    threat?: StringFilter<"RiskRegister"> | string
    likelihood?: IntFilter<"RiskRegister"> | number
    impact?: IntFilter<"RiskRegister"> | number
    mitigation?: StringFilter<"RiskRegister"> | string
    status?: StringFilter<"RiskRegister"> | string
    createdAt?: DateTimeFilter<"RiskRegister"> | Date | string
    updatedAt?: DateTimeFilter<"RiskRegister"> | Date | string
  }

  export type RiskRegisterOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    threat?: SortOrder
    likelihood?: SortOrder
    impact?: SortOrder
    mitigation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskRegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: RiskRegisterWhereInput | RiskRegisterWhereInput[]
    OR?: RiskRegisterWhereInput[]
    NOT?: RiskRegisterWhereInput | RiskRegisterWhereInput[]
    threat?: StringFilter<"RiskRegister"> | string
    likelihood?: IntFilter<"RiskRegister"> | number
    impact?: IntFilter<"RiskRegister"> | number
    mitigation?: StringFilter<"RiskRegister"> | string
    status?: StringFilter<"RiskRegister"> | string
    createdAt?: DateTimeFilter<"RiskRegister"> | Date | string
    updatedAt?: DateTimeFilter<"RiskRegister"> | Date | string
  }, "id" | "title">

  export type RiskRegisterOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    threat?: SortOrder
    likelihood?: SortOrder
    impact?: SortOrder
    mitigation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RiskRegisterCountOrderByAggregateInput
    _avg?: RiskRegisterAvgOrderByAggregateInput
    _max?: RiskRegisterMaxOrderByAggregateInput
    _min?: RiskRegisterMinOrderByAggregateInput
    _sum?: RiskRegisterSumOrderByAggregateInput
  }

  export type RiskRegisterScalarWhereWithAggregatesInput = {
    AND?: RiskRegisterScalarWhereWithAggregatesInput | RiskRegisterScalarWhereWithAggregatesInput[]
    OR?: RiskRegisterScalarWhereWithAggregatesInput[]
    NOT?: RiskRegisterScalarWhereWithAggregatesInput | RiskRegisterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RiskRegister"> | string
    title?: StringWithAggregatesFilter<"RiskRegister"> | string
    threat?: StringWithAggregatesFilter<"RiskRegister"> | string
    likelihood?: IntWithAggregatesFilter<"RiskRegister"> | number
    impact?: IntWithAggregatesFilter<"RiskRegister"> | number
    mitigation?: StringWithAggregatesFilter<"RiskRegister"> | string
    status?: StringWithAggregatesFilter<"RiskRegister"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RiskRegister"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RiskRegister"> | Date | string
  }

  export type SecurityAlertWhereInput = {
    AND?: SecurityAlertWhereInput | SecurityAlertWhereInput[]
    OR?: SecurityAlertWhereInput[]
    NOT?: SecurityAlertWhereInput | SecurityAlertWhereInput[]
    id?: StringFilter<"SecurityAlert"> | string
    title?: StringFilter<"SecurityAlert"> | string
    description?: StringFilter<"SecurityAlert"> | string
    source?: StringFilter<"SecurityAlert"> | string
    severity?: StringFilter<"SecurityAlert"> | string
    status?: StringFilter<"SecurityAlert"> | string
    createdAt?: DateTimeFilter<"SecurityAlert"> | Date | string
    updatedAt?: DateTimeFilter<"SecurityAlert"> | Date | string
  }

  export type SecurityAlertOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    source?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecurityAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: SecurityAlertWhereInput | SecurityAlertWhereInput[]
    OR?: SecurityAlertWhereInput[]
    NOT?: SecurityAlertWhereInput | SecurityAlertWhereInput[]
    description?: StringFilter<"SecurityAlert"> | string
    source?: StringFilter<"SecurityAlert"> | string
    severity?: StringFilter<"SecurityAlert"> | string
    status?: StringFilter<"SecurityAlert"> | string
    createdAt?: DateTimeFilter<"SecurityAlert"> | Date | string
    updatedAt?: DateTimeFilter<"SecurityAlert"> | Date | string
  }, "id" | "title">

  export type SecurityAlertOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    source?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SecurityAlertCountOrderByAggregateInput
    _max?: SecurityAlertMaxOrderByAggregateInput
    _min?: SecurityAlertMinOrderByAggregateInput
  }

  export type SecurityAlertScalarWhereWithAggregatesInput = {
    AND?: SecurityAlertScalarWhereWithAggregatesInput | SecurityAlertScalarWhereWithAggregatesInput[]
    OR?: SecurityAlertScalarWhereWithAggregatesInput[]
    NOT?: SecurityAlertScalarWhereWithAggregatesInput | SecurityAlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecurityAlert"> | string
    title?: StringWithAggregatesFilter<"SecurityAlert"> | string
    description?: StringWithAggregatesFilter<"SecurityAlert"> | string
    source?: StringWithAggregatesFilter<"SecurityAlert"> | string
    severity?: StringWithAggregatesFilter<"SecurityAlert"> | string
    status?: StringWithAggregatesFilter<"SecurityAlert"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SecurityAlert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SecurityAlert"> | Date | string
  }

  export type EmployeeAttestationWhereInput = {
    AND?: EmployeeAttestationWhereInput | EmployeeAttestationWhereInput[]
    OR?: EmployeeAttestationWhereInput[]
    NOT?: EmployeeAttestationWhereInput | EmployeeAttestationWhereInput[]
    id?: StringFilter<"EmployeeAttestation"> | string
    employeeName?: StringFilter<"EmployeeAttestation"> | string
    employeeEmail?: StringFilter<"EmployeeAttestation"> | string
    policyTitle?: StringFilter<"EmployeeAttestation"> | string
    status?: StringFilter<"EmployeeAttestation"> | string
    signedAt?: DateTimeNullableFilter<"EmployeeAttestation"> | Date | string | null
    createdAt?: DateTimeFilter<"EmployeeAttestation"> | Date | string
  }

  export type EmployeeAttestationOrderByWithRelationInput = {
    id?: SortOrder
    employeeName?: SortOrder
    employeeEmail?: SortOrder
    policyTitle?: SortOrder
    status?: SortOrder
    signedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeAttestationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmployeeAttestationWhereInput | EmployeeAttestationWhereInput[]
    OR?: EmployeeAttestationWhereInput[]
    NOT?: EmployeeAttestationWhereInput | EmployeeAttestationWhereInput[]
    employeeName?: StringFilter<"EmployeeAttestation"> | string
    employeeEmail?: StringFilter<"EmployeeAttestation"> | string
    policyTitle?: StringFilter<"EmployeeAttestation"> | string
    status?: StringFilter<"EmployeeAttestation"> | string
    signedAt?: DateTimeNullableFilter<"EmployeeAttestation"> | Date | string | null
    createdAt?: DateTimeFilter<"EmployeeAttestation"> | Date | string
  }, "id">

  export type EmployeeAttestationOrderByWithAggregationInput = {
    id?: SortOrder
    employeeName?: SortOrder
    employeeEmail?: SortOrder
    policyTitle?: SortOrder
    status?: SortOrder
    signedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EmployeeAttestationCountOrderByAggregateInput
    _max?: EmployeeAttestationMaxOrderByAggregateInput
    _min?: EmployeeAttestationMinOrderByAggregateInput
  }

  export type EmployeeAttestationScalarWhereWithAggregatesInput = {
    AND?: EmployeeAttestationScalarWhereWithAggregatesInput | EmployeeAttestationScalarWhereWithAggregatesInput[]
    OR?: EmployeeAttestationScalarWhereWithAggregatesInput[]
    NOT?: EmployeeAttestationScalarWhereWithAggregatesInput | EmployeeAttestationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmployeeAttestation"> | string
    employeeName?: StringWithAggregatesFilter<"EmployeeAttestation"> | string
    employeeEmail?: StringWithAggregatesFilter<"EmployeeAttestation"> | string
    policyTitle?: StringWithAggregatesFilter<"EmployeeAttestation"> | string
    status?: StringWithAggregatesFilter<"EmployeeAttestation"> | string
    signedAt?: DateTimeNullableWithAggregatesFilter<"EmployeeAttestation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeAttestation"> | Date | string
  }

  export type ConnectorScanLogWhereInput = {
    AND?: ConnectorScanLogWhereInput | ConnectorScanLogWhereInput[]
    OR?: ConnectorScanLogWhereInput[]
    NOT?: ConnectorScanLogWhereInput | ConnectorScanLogWhereInput[]
    id?: StringFilter<"ConnectorScanLog"> | string
    connectorType?: StringFilter<"ConnectorScanLog"> | string
    status?: StringFilter<"ConnectorScanLog"> | string
    details?: StringFilter<"ConnectorScanLog"> | string
    createdAt?: DateTimeFilter<"ConnectorScanLog"> | Date | string
  }

  export type ConnectorScanLogOrderByWithRelationInput = {
    id?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectorScanLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConnectorScanLogWhereInput | ConnectorScanLogWhereInput[]
    OR?: ConnectorScanLogWhereInput[]
    NOT?: ConnectorScanLogWhereInput | ConnectorScanLogWhereInput[]
    connectorType?: StringFilter<"ConnectorScanLog"> | string
    status?: StringFilter<"ConnectorScanLog"> | string
    details?: StringFilter<"ConnectorScanLog"> | string
    createdAt?: DateTimeFilter<"ConnectorScanLog"> | Date | string
  }, "id">

  export type ConnectorScanLogOrderByWithAggregationInput = {
    id?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    _count?: ConnectorScanLogCountOrderByAggregateInput
    _max?: ConnectorScanLogMaxOrderByAggregateInput
    _min?: ConnectorScanLogMinOrderByAggregateInput
  }

  export type ConnectorScanLogScalarWhereWithAggregatesInput = {
    AND?: ConnectorScanLogScalarWhereWithAggregatesInput | ConnectorScanLogScalarWhereWithAggregatesInput[]
    OR?: ConnectorScanLogScalarWhereWithAggregatesInput[]
    NOT?: ConnectorScanLogScalarWhereWithAggregatesInput | ConnectorScanLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConnectorScanLog"> | string
    connectorType?: StringWithAggregatesFilter<"ConnectorScanLog"> | string
    status?: StringWithAggregatesFilter<"ConnectorScanLog"> | string
    details?: StringWithAggregatesFilter<"ConnectorScanLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConnectorScanLog"> | Date | string
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: StringFilter<"Vendor"> | string
    name?: StringFilter<"Vendor"> | string
    securityTier?: StringFilter<"Vendor"> | string
    complianceStatus?: StringFilter<"Vendor"> | string
    contactEmail?: StringFilter<"Vendor"> | string
    score?: IntFilter<"Vendor"> | number
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    securityTier?: SortOrder
    complianceStatus?: SortOrder
    contactEmail?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    securityTier?: StringFilter<"Vendor"> | string
    complianceStatus?: StringFilter<"Vendor"> | string
    contactEmail?: StringFilter<"Vendor"> | string
    score?: IntFilter<"Vendor"> | number
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
  }, "id" | "name">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    securityTier?: SortOrder
    complianceStatus?: SortOrder
    contactEmail?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vendor"> | string
    name?: StringWithAggregatesFilter<"Vendor"> | string
    securityTier?: StringWithAggregatesFilter<"Vendor"> | string
    complianceStatus?: StringWithAggregatesFilter<"Vendor"> | string
    contactEmail?: StringWithAggregatesFilter<"Vendor"> | string
    score?: IntWithAggregatesFilter<"Vendor"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
  }

  export type AuditCommentWhereInput = {
    AND?: AuditCommentWhereInput | AuditCommentWhereInput[]
    OR?: AuditCommentWhereInput[]
    NOT?: AuditCommentWhereInput | AuditCommentWhereInput[]
    id?: StringFilter<"AuditComment"> | string
    questionId?: StringFilter<"AuditComment"> | string
    author?: StringFilter<"AuditComment"> | string
    text?: StringFilter<"AuditComment"> | string
    createdAt?: DateTimeFilter<"AuditComment"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type AuditCommentOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    author?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type AuditCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditCommentWhereInput | AuditCommentWhereInput[]
    OR?: AuditCommentWhereInput[]
    NOT?: AuditCommentWhereInput | AuditCommentWhereInput[]
    questionId?: StringFilter<"AuditComment"> | string
    author?: StringFilter<"AuditComment"> | string
    text?: StringFilter<"AuditComment"> | string
    createdAt?: DateTimeFilter<"AuditComment"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type AuditCommentOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    author?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    _count?: AuditCommentCountOrderByAggregateInput
    _max?: AuditCommentMaxOrderByAggregateInput
    _min?: AuditCommentMinOrderByAggregateInput
  }

  export type AuditCommentScalarWhereWithAggregatesInput = {
    AND?: AuditCommentScalarWhereWithAggregatesInput | AuditCommentScalarWhereWithAggregatesInput[]
    OR?: AuditCommentScalarWhereWithAggregatesInput[]
    NOT?: AuditCommentScalarWhereWithAggregatesInput | AuditCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditComment"> | string
    questionId?: StringWithAggregatesFilter<"AuditComment"> | string
    author?: StringWithAggregatesFilter<"AuditComment"> | string
    text?: StringWithAggregatesFilter<"AuditComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditComment"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assessments?: AssessmentCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assessments?: AssessmentUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessments?: AssessmentUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessments?: AssessmentUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentCreateInput = {
    id?: string
    score?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAssessmentsInput
    answers?: AnswerCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateInput = {
    id?: string
    organizationId: string
    score?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAssessmentsNestedInput
    answers?: AnswerUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentCreateManyInput = {
    id?: string
    organizationId: string
    score?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    domain: string
    text: string
    requiresDoc?: boolean
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    mappings?: MappingCreateNestedManyWithoutQuestionInput
    remediationTask?: RemediationTaskCreateNestedOneWithoutQuestionInput
    auditComments?: AuditCommentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    domain: string
    text: string
    requiresDoc?: boolean
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    mappings?: MappingUncheckedCreateNestedManyWithoutQuestionInput
    remediationTask?: RemediationTaskUncheckedCreateNestedOneWithoutQuestionInput
    auditComments?: AuditCommentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    requiresDoc?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    mappings?: MappingUpdateManyWithoutQuestionNestedInput
    remediationTask?: RemediationTaskUpdateOneWithoutQuestionNestedInput
    auditComments?: AuditCommentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    requiresDoc?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    mappings?: MappingUncheckedUpdateManyWithoutQuestionNestedInput
    remediationTask?: RemediationTaskUncheckedUpdateOneWithoutQuestionNestedInput
    auditComments?: AuditCommentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    domain: string
    text: string
    requiresDoc?: boolean
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    requiresDoc?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    requiresDoc?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnswerCreateInput = {
    id?: string
    response: string
    evidenceUrl?: string | null
    evidenceText?: string | null
    aiVerified?: boolean | null
    aiReasoning?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assessment: AssessmentCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    assessmentId: string
    questionId: string
    response: string
    evidenceUrl?: string | null
    evidenceText?: string | null
    aiVerified?: boolean | null
    aiReasoning?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceText?: NullableStringFieldUpdateOperationsInput | string | null
    aiVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: AssessmentUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceText?: NullableStringFieldUpdateOperationsInput | string | null
    aiVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyInput = {
    id?: string
    assessmentId: string
    questionId: string
    response: string
    evidenceUrl?: string | null
    evidenceText?: string | null
    aiVerified?: boolean | null
    aiReasoning?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceText?: NullableStringFieldUpdateOperationsInput | string | null
    aiVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceText?: NullableStringFieldUpdateOperationsInput | string | null
    aiVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrameworkCreateInput = {
    id?: string
    name: string
    description: string
    mappings?: MappingCreateNestedManyWithoutFrameworkInput
  }

  export type FrameworkUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    mappings?: MappingUncheckedCreateNestedManyWithoutFrameworkInput
  }

  export type FrameworkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mappings?: MappingUpdateManyWithoutFrameworkNestedInput
  }

  export type FrameworkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mappings?: MappingUncheckedUpdateManyWithoutFrameworkNestedInput
  }

  export type FrameworkCreateManyInput = {
    id?: string
    name: string
    description: string
  }

  export type FrameworkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FrameworkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MappingCreateInput = {
    id?: string
    clause: string
    description: string
    question: QuestionCreateNestedOneWithoutMappingsInput
    framework: FrameworkCreateNestedOneWithoutMappingsInput
  }

  export type MappingUncheckedCreateInput = {
    id?: string
    questionId: string
    frameworkId: string
    clause: string
    description: string
  }

  export type MappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutMappingsNestedInput
    framework?: FrameworkUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type MappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MappingCreateManyInput = {
    id?: string
    questionId: string
    frameworkId: string
    clause: string
    description: string
  }

  export type MappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyDocumentCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyDocumentUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyDocumentCreateManyInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemediationTaskCreateInput = {
    id?: string
    assignedTo?: string | null
    dueDate?: Date | string | null
    status?: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutRemediationTaskInput
  }

  export type RemediationTaskUncheckedCreateInput = {
    id?: string
    questionId: string
    assignedTo?: string | null
    dueDate?: Date | string | null
    status?: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemediationTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutRemediationTaskNestedInput
  }

  export type RemediationTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemediationTaskCreateManyInput = {
    id?: string
    questionId: string
    assignedTo?: string | null
    dueDate?: Date | string | null
    status?: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemediationTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemediationTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskRegisterCreateInput = {
    id?: string
    title: string
    threat: string
    likelihood: number
    impact: number
    mitigation: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskRegisterUncheckedCreateInput = {
    id?: string
    title: string
    threat: string
    likelihood: number
    impact: number
    mitigation: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskRegisterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    threat?: StringFieldUpdateOperationsInput | string
    likelihood?: IntFieldUpdateOperationsInput | number
    impact?: IntFieldUpdateOperationsInput | number
    mitigation?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskRegisterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    threat?: StringFieldUpdateOperationsInput | string
    likelihood?: IntFieldUpdateOperationsInput | number
    impact?: IntFieldUpdateOperationsInput | number
    mitigation?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskRegisterCreateManyInput = {
    id?: string
    title: string
    threat: string
    likelihood: number
    impact: number
    mitigation: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskRegisterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    threat?: StringFieldUpdateOperationsInput | string
    likelihood?: IntFieldUpdateOperationsInput | number
    impact?: IntFieldUpdateOperationsInput | number
    mitigation?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskRegisterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    threat?: StringFieldUpdateOperationsInput | string
    likelihood?: IntFieldUpdateOperationsInput | number
    impact?: IntFieldUpdateOperationsInput | number
    mitigation?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityAlertCreateInput = {
    id?: string
    title: string
    description: string
    source: string
    severity: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecurityAlertUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    source: string
    severity: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecurityAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityAlertCreateManyInput = {
    id?: string
    title: string
    description: string
    source: string
    severity: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecurityAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeAttestationCreateInput = {
    id?: string
    employeeName: string
    employeeEmail: string
    policyTitle: string
    status?: string
    signedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmployeeAttestationUncheckedCreateInput = {
    id?: string
    employeeName: string
    employeeEmail: string
    policyTitle: string
    status?: string
    signedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmployeeAttestationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    policyTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeAttestationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    policyTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeAttestationCreateManyInput = {
    id?: string
    employeeName: string
    employeeEmail: string
    policyTitle: string
    status?: string
    signedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmployeeAttestationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    policyTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeAttestationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    policyTitle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorScanLogCreateInput = {
    id?: string
    connectorType: string
    status: string
    details: string
    createdAt?: Date | string
  }

  export type ConnectorScanLogUncheckedCreateInput = {
    id?: string
    connectorType: string
    status: string
    details: string
    createdAt?: Date | string
  }

  export type ConnectorScanLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorScanLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorScanLogCreateManyInput = {
    id?: string
    connectorType: string
    status: string
    details: string
    createdAt?: Date | string
  }

  export type ConnectorScanLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorScanLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorCreateInput = {
    id?: string
    name: string
    securityTier: string
    complianceStatus?: string
    contactEmail: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    name: string
    securityTier: string
    complianceStatus?: string
    contactEmail: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    securityTier?: StringFieldUpdateOperationsInput | string
    complianceStatus?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    securityTier?: StringFieldUpdateOperationsInput | string
    complianceStatus?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorCreateManyInput = {
    id?: string
    name: string
    securityTier: string
    complianceStatus?: string
    contactEmail: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    securityTier?: StringFieldUpdateOperationsInput | string
    complianceStatus?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    securityTier?: StringFieldUpdateOperationsInput | string
    complianceStatus?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditCommentCreateInput = {
    id?: string
    author: string
    text: string
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutAuditCommentsInput
  }

  export type AuditCommentUncheckedCreateInput = {
    id?: string
    questionId: string
    author: string
    text: string
    createdAt?: Date | string
  }

  export type AuditCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAuditCommentsNestedInput
  }

  export type AuditCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditCommentCreateManyInput = {
    id?: string
    questionId: string
    author: string
    text: string
    createdAt?: Date | string
  }

  export type AuditCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AssessmentListRelationFilter = {
    every?: AssessmentWhereInput
    some?: AssessmentWhereInput
    none?: AssessmentWhereInput
  }

  export type AssessmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    score?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type AssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    score?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    score?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MappingListRelationFilter = {
    every?: MappingWhereInput
    some?: MappingWhereInput
    none?: MappingWhereInput
  }

  export type RemediationTaskNullableScalarRelationFilter = {
    is?: RemediationTaskWhereInput | null
    isNot?: RemediationTaskWhereInput | null
  }

  export type AuditCommentListRelationFilter = {
    every?: AuditCommentWhereInput
    some?: AuditCommentWhereInput
    none?: AuditCommentWhereInput
  }

  export type MappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    text?: SortOrder
    requiresDoc?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    text?: SortOrder
    requiresDoc?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    text?: SortOrder
    requiresDoc?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AssessmentScalarRelationFilter = {
    is?: AssessmentWhereInput
    isNot?: AssessmentWhereInput
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnswerAssessmentIdQuestionIdCompoundUniqueInput = {
    assessmentId: string
    questionId: string
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionId?: SortOrder
    response?: SortOrder
    evidenceUrl?: SortOrder
    evidenceText?: SortOrder
    aiVerified?: SortOrder
    aiReasoning?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionId?: SortOrder
    response?: SortOrder
    evidenceUrl?: SortOrder
    evidenceText?: SortOrder
    aiVerified?: SortOrder
    aiReasoning?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionId?: SortOrder
    response?: SortOrder
    evidenceUrl?: SortOrder
    evidenceText?: SortOrder
    aiVerified?: SortOrder
    aiReasoning?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FrameworkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FrameworkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FrameworkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FrameworkScalarRelationFilter = {
    is?: FrameworkWhereInput
    isNot?: FrameworkWhereInput
  }

  export type MappingCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    frameworkId?: SortOrder
    clause?: SortOrder
    description?: SortOrder
  }

  export type MappingMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    frameworkId?: SortOrder
    clause?: SortOrder
    description?: SortOrder
  }

  export type MappingMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    frameworkId?: SortOrder
    clause?: SortOrder
    description?: SortOrder
  }

  export type PolicyDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemediationTaskCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    assignedTo?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemediationTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    assignedTo?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemediationTaskMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    assignedTo?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RiskRegisterCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    threat?: SortOrder
    likelihood?: SortOrder
    impact?: SortOrder
    mitigation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskRegisterAvgOrderByAggregateInput = {
    likelihood?: SortOrder
    impact?: SortOrder
  }

  export type RiskRegisterMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    threat?: SortOrder
    likelihood?: SortOrder
    impact?: SortOrder
    mitigation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskRegisterMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    threat?: SortOrder
    likelihood?: SortOrder
    impact?: SortOrder
    mitigation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskRegisterSumOrderByAggregateInput = {
    likelihood?: SortOrder
    impact?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SecurityAlertCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    source?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecurityAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    source?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecurityAlertMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    source?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAttestationCountOrderByAggregateInput = {
    id?: SortOrder
    employeeName?: SortOrder
    employeeEmail?: SortOrder
    policyTitle?: SortOrder
    status?: SortOrder
    signedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeAttestationMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeName?: SortOrder
    employeeEmail?: SortOrder
    policyTitle?: SortOrder
    status?: SortOrder
    signedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeAttestationMinOrderByAggregateInput = {
    id?: SortOrder
    employeeName?: SortOrder
    employeeEmail?: SortOrder
    policyTitle?: SortOrder
    status?: SortOrder
    signedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectorScanLogCountOrderByAggregateInput = {
    id?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectorScanLogMaxOrderByAggregateInput = {
    id?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectorScanLogMinOrderByAggregateInput = {
    id?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    securityTier?: SortOrder
    complianceStatus?: SortOrder
    contactEmail?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    securityTier?: SortOrder
    complianceStatus?: SortOrder
    contactEmail?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    securityTier?: SortOrder
    complianceStatus?: SortOrder
    contactEmail?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type AuditCommentCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    author?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    author?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditCommentMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    author?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AssessmentCreateWithoutOrganizationInput, AssessmentUncheckedCreateWithoutOrganizationInput> | AssessmentCreateWithoutOrganizationInput[] | AssessmentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutOrganizationInput | AssessmentCreateOrConnectWithoutOrganizationInput[]
    createMany?: AssessmentCreateManyOrganizationInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type AssessmentUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AssessmentCreateWithoutOrganizationInput, AssessmentUncheckedCreateWithoutOrganizationInput> | AssessmentCreateWithoutOrganizationInput[] | AssessmentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutOrganizationInput | AssessmentCreateOrConnectWithoutOrganizationInput[]
    createMany?: AssessmentCreateManyOrganizationInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AssessmentUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AssessmentCreateWithoutOrganizationInput, AssessmentUncheckedCreateWithoutOrganizationInput> | AssessmentCreateWithoutOrganizationInput[] | AssessmentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutOrganizationInput | AssessmentCreateOrConnectWithoutOrganizationInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutOrganizationInput | AssessmentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AssessmentCreateManyOrganizationInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutOrganizationInput | AssessmentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutOrganizationInput | AssessmentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type AssessmentUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AssessmentCreateWithoutOrganizationInput, AssessmentUncheckedCreateWithoutOrganizationInput> | AssessmentCreateWithoutOrganizationInput[] | AssessmentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutOrganizationInput | AssessmentCreateOrConnectWithoutOrganizationInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutOrganizationInput | AssessmentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AssessmentCreateManyOrganizationInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutOrganizationInput | AssessmentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutOrganizationInput | AssessmentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutAssessmentsInput = {
    create?: XOR<OrganizationCreateWithoutAssessmentsInput, OrganizationUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAssessmentsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<AnswerCreateWithoutAssessmentInput, AnswerUncheckedCreateWithoutAssessmentInput> | AnswerCreateWithoutAssessmentInput[] | AnswerUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAssessmentInput | AnswerCreateOrConnectWithoutAssessmentInput[]
    createMany?: AnswerCreateManyAssessmentInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<AnswerCreateWithoutAssessmentInput, AnswerUncheckedCreateWithoutAssessmentInput> | AnswerCreateWithoutAssessmentInput[] | AnswerUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAssessmentInput | AnswerCreateOrConnectWithoutAssessmentInput[]
    createMany?: AnswerCreateManyAssessmentInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutAssessmentsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAssessmentsInput, OrganizationUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAssessmentsInput
    upsert?: OrganizationUpsertWithoutAssessmentsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAssessmentsInput, OrganizationUpdateWithoutAssessmentsInput>, OrganizationUncheckedUpdateWithoutAssessmentsInput>
  }

  export type AnswerUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<AnswerCreateWithoutAssessmentInput, AnswerUncheckedCreateWithoutAssessmentInput> | AnswerCreateWithoutAssessmentInput[] | AnswerUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAssessmentInput | AnswerCreateOrConnectWithoutAssessmentInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAssessmentInput | AnswerUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: AnswerCreateManyAssessmentInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAssessmentInput | AnswerUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAssessmentInput | AnswerUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<AnswerCreateWithoutAssessmentInput, AnswerUncheckedCreateWithoutAssessmentInput> | AnswerCreateWithoutAssessmentInput[] | AnswerUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAssessmentInput | AnswerCreateOrConnectWithoutAssessmentInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAssessmentInput | AnswerUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: AnswerCreateManyAssessmentInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAssessmentInput | AnswerUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAssessmentInput | AnswerUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type MappingCreateNestedManyWithoutQuestionInput = {
    create?: XOR<MappingCreateWithoutQuestionInput, MappingUncheckedCreateWithoutQuestionInput> | MappingCreateWithoutQuestionInput[] | MappingUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutQuestionInput | MappingCreateOrConnectWithoutQuestionInput[]
    createMany?: MappingCreateManyQuestionInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type RemediationTaskCreateNestedOneWithoutQuestionInput = {
    create?: XOR<RemediationTaskCreateWithoutQuestionInput, RemediationTaskUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: RemediationTaskCreateOrConnectWithoutQuestionInput
    connect?: RemediationTaskWhereUniqueInput
  }

  export type AuditCommentCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AuditCommentCreateWithoutQuestionInput, AuditCommentUncheckedCreateWithoutQuestionInput> | AuditCommentCreateWithoutQuestionInput[] | AuditCommentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuditCommentCreateOrConnectWithoutQuestionInput | AuditCommentCreateOrConnectWithoutQuestionInput[]
    createMany?: AuditCommentCreateManyQuestionInputEnvelope
    connect?: AuditCommentWhereUniqueInput | AuditCommentWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type MappingUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<MappingCreateWithoutQuestionInput, MappingUncheckedCreateWithoutQuestionInput> | MappingCreateWithoutQuestionInput[] | MappingUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutQuestionInput | MappingCreateOrConnectWithoutQuestionInput[]
    createMany?: MappingCreateManyQuestionInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type RemediationTaskUncheckedCreateNestedOneWithoutQuestionInput = {
    create?: XOR<RemediationTaskCreateWithoutQuestionInput, RemediationTaskUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: RemediationTaskCreateOrConnectWithoutQuestionInput
    connect?: RemediationTaskWhereUniqueInput
  }

  export type AuditCommentUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AuditCommentCreateWithoutQuestionInput, AuditCommentUncheckedCreateWithoutQuestionInput> | AuditCommentCreateWithoutQuestionInput[] | AuditCommentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuditCommentCreateOrConnectWithoutQuestionInput | AuditCommentCreateOrConnectWithoutQuestionInput[]
    createMany?: AuditCommentCreateManyQuestionInputEnvelope
    connect?: AuditCommentWhereUniqueInput | AuditCommentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type MappingUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<MappingCreateWithoutQuestionInput, MappingUncheckedCreateWithoutQuestionInput> | MappingCreateWithoutQuestionInput[] | MappingUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutQuestionInput | MappingCreateOrConnectWithoutQuestionInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutQuestionInput | MappingUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: MappingCreateManyQuestionInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutQuestionInput | MappingUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutQuestionInput | MappingUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type RemediationTaskUpdateOneWithoutQuestionNestedInput = {
    create?: XOR<RemediationTaskCreateWithoutQuestionInput, RemediationTaskUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: RemediationTaskCreateOrConnectWithoutQuestionInput
    upsert?: RemediationTaskUpsertWithoutQuestionInput
    disconnect?: RemediationTaskWhereInput | boolean
    delete?: RemediationTaskWhereInput | boolean
    connect?: RemediationTaskWhereUniqueInput
    update?: XOR<XOR<RemediationTaskUpdateToOneWithWhereWithoutQuestionInput, RemediationTaskUpdateWithoutQuestionInput>, RemediationTaskUncheckedUpdateWithoutQuestionInput>
  }

  export type AuditCommentUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AuditCommentCreateWithoutQuestionInput, AuditCommentUncheckedCreateWithoutQuestionInput> | AuditCommentCreateWithoutQuestionInput[] | AuditCommentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuditCommentCreateOrConnectWithoutQuestionInput | AuditCommentCreateOrConnectWithoutQuestionInput[]
    upsert?: AuditCommentUpsertWithWhereUniqueWithoutQuestionInput | AuditCommentUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AuditCommentCreateManyQuestionInputEnvelope
    set?: AuditCommentWhereUniqueInput | AuditCommentWhereUniqueInput[]
    disconnect?: AuditCommentWhereUniqueInput | AuditCommentWhereUniqueInput[]
    delete?: AuditCommentWhereUniqueInput | AuditCommentWhereUniqueInput[]
    connect?: AuditCommentWhereUniqueInput | AuditCommentWhereUniqueInput[]
    update?: AuditCommentUpdateWithWhereUniqueWithoutQuestionInput | AuditCommentUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AuditCommentUpdateManyWithWhereWithoutQuestionInput | AuditCommentUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AuditCommentScalarWhereInput | AuditCommentScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type MappingUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<MappingCreateWithoutQuestionInput, MappingUncheckedCreateWithoutQuestionInput> | MappingCreateWithoutQuestionInput[] | MappingUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutQuestionInput | MappingCreateOrConnectWithoutQuestionInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutQuestionInput | MappingUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: MappingCreateManyQuestionInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutQuestionInput | MappingUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutQuestionInput | MappingUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type RemediationTaskUncheckedUpdateOneWithoutQuestionNestedInput = {
    create?: XOR<RemediationTaskCreateWithoutQuestionInput, RemediationTaskUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: RemediationTaskCreateOrConnectWithoutQuestionInput
    upsert?: RemediationTaskUpsertWithoutQuestionInput
    disconnect?: RemediationTaskWhereInput | boolean
    delete?: RemediationTaskWhereInput | boolean
    connect?: RemediationTaskWhereUniqueInput
    update?: XOR<XOR<RemediationTaskUpdateToOneWithWhereWithoutQuestionInput, RemediationTaskUpdateWithoutQuestionInput>, RemediationTaskUncheckedUpdateWithoutQuestionInput>
  }

  export type AuditCommentUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AuditCommentCreateWithoutQuestionInput, AuditCommentUncheckedCreateWithoutQuestionInput> | AuditCommentCreateWithoutQuestionInput[] | AuditCommentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuditCommentCreateOrConnectWithoutQuestionInput | AuditCommentCreateOrConnectWithoutQuestionInput[]
    upsert?: AuditCommentUpsertWithWhereUniqueWithoutQuestionInput | AuditCommentUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AuditCommentCreateManyQuestionInputEnvelope
    set?: AuditCommentWhereUniqueInput | AuditCommentWhereUniqueInput[]
    disconnect?: AuditCommentWhereUniqueInput | AuditCommentWhereUniqueInput[]
    delete?: AuditCommentWhereUniqueInput | AuditCommentWhereUniqueInput[]
    connect?: AuditCommentWhereUniqueInput | AuditCommentWhereUniqueInput[]
    update?: AuditCommentUpdateWithWhereUniqueWithoutQuestionInput | AuditCommentUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AuditCommentUpdateManyWithWhereWithoutQuestionInput | AuditCommentUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AuditCommentScalarWhereInput | AuditCommentScalarWhereInput[]
  }

  export type AssessmentCreateNestedOneWithoutAnswersInput = {
    create?: XOR<AssessmentCreateWithoutAnswersInput, AssessmentUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutAnswersInput
    connect?: AssessmentWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AssessmentUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<AssessmentCreateWithoutAnswersInput, AssessmentUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutAnswersInput
    upsert?: AssessmentUpsertWithoutAnswersInput
    connect?: AssessmentWhereUniqueInput
    update?: XOR<XOR<AssessmentUpdateToOneWithWhereWithoutAnswersInput, AssessmentUpdateWithoutAnswersInput>, AssessmentUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type MappingCreateNestedManyWithoutFrameworkInput = {
    create?: XOR<MappingCreateWithoutFrameworkInput, MappingUncheckedCreateWithoutFrameworkInput> | MappingCreateWithoutFrameworkInput[] | MappingUncheckedCreateWithoutFrameworkInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutFrameworkInput | MappingCreateOrConnectWithoutFrameworkInput[]
    createMany?: MappingCreateManyFrameworkInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type MappingUncheckedCreateNestedManyWithoutFrameworkInput = {
    create?: XOR<MappingCreateWithoutFrameworkInput, MappingUncheckedCreateWithoutFrameworkInput> | MappingCreateWithoutFrameworkInput[] | MappingUncheckedCreateWithoutFrameworkInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutFrameworkInput | MappingCreateOrConnectWithoutFrameworkInput[]
    createMany?: MappingCreateManyFrameworkInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type MappingUpdateManyWithoutFrameworkNestedInput = {
    create?: XOR<MappingCreateWithoutFrameworkInput, MappingUncheckedCreateWithoutFrameworkInput> | MappingCreateWithoutFrameworkInput[] | MappingUncheckedCreateWithoutFrameworkInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutFrameworkInput | MappingCreateOrConnectWithoutFrameworkInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutFrameworkInput | MappingUpsertWithWhereUniqueWithoutFrameworkInput[]
    createMany?: MappingCreateManyFrameworkInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutFrameworkInput | MappingUpdateWithWhereUniqueWithoutFrameworkInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutFrameworkInput | MappingUpdateManyWithWhereWithoutFrameworkInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type MappingUncheckedUpdateManyWithoutFrameworkNestedInput = {
    create?: XOR<MappingCreateWithoutFrameworkInput, MappingUncheckedCreateWithoutFrameworkInput> | MappingCreateWithoutFrameworkInput[] | MappingUncheckedCreateWithoutFrameworkInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutFrameworkInput | MappingCreateOrConnectWithoutFrameworkInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutFrameworkInput | MappingUpsertWithWhereUniqueWithoutFrameworkInput[]
    createMany?: MappingCreateManyFrameworkInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutFrameworkInput | MappingUpdateWithWhereUniqueWithoutFrameworkInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutFrameworkInput | MappingUpdateManyWithWhereWithoutFrameworkInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutMappingsInput = {
    create?: XOR<QuestionCreateWithoutMappingsInput, QuestionUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutMappingsInput
    connect?: QuestionWhereUniqueInput
  }

  export type FrameworkCreateNestedOneWithoutMappingsInput = {
    create?: XOR<FrameworkCreateWithoutMappingsInput, FrameworkUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: FrameworkCreateOrConnectWithoutMappingsInput
    connect?: FrameworkWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutMappingsNestedInput = {
    create?: XOR<QuestionCreateWithoutMappingsInput, QuestionUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutMappingsInput
    upsert?: QuestionUpsertWithoutMappingsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutMappingsInput, QuestionUpdateWithoutMappingsInput>, QuestionUncheckedUpdateWithoutMappingsInput>
  }

  export type FrameworkUpdateOneRequiredWithoutMappingsNestedInput = {
    create?: XOR<FrameworkCreateWithoutMappingsInput, FrameworkUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: FrameworkCreateOrConnectWithoutMappingsInput
    upsert?: FrameworkUpsertWithoutMappingsInput
    connect?: FrameworkWhereUniqueInput
    update?: XOR<XOR<FrameworkUpdateToOneWithWhereWithoutMappingsInput, FrameworkUpdateWithoutMappingsInput>, FrameworkUncheckedUpdateWithoutMappingsInput>
  }

  export type QuestionCreateNestedOneWithoutRemediationTaskInput = {
    create?: XOR<QuestionCreateWithoutRemediationTaskInput, QuestionUncheckedCreateWithoutRemediationTaskInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutRemediationTaskInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutRemediationTaskNestedInput = {
    create?: XOR<QuestionCreateWithoutRemediationTaskInput, QuestionUncheckedCreateWithoutRemediationTaskInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutRemediationTaskInput
    upsert?: QuestionUpsertWithoutRemediationTaskInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutRemediationTaskInput, QuestionUpdateWithoutRemediationTaskInput>, QuestionUncheckedUpdateWithoutRemediationTaskInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionCreateNestedOneWithoutAuditCommentsInput = {
    create?: XOR<QuestionCreateWithoutAuditCommentsInput, QuestionUncheckedCreateWithoutAuditCommentsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAuditCommentsInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutAuditCommentsNestedInput = {
    create?: XOR<QuestionCreateWithoutAuditCommentsInput, QuestionUncheckedCreateWithoutAuditCommentsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAuditCommentsInput
    upsert?: QuestionUpsertWithoutAuditCommentsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAuditCommentsInput, QuestionUpdateWithoutAuditCommentsInput>, QuestionUncheckedUpdateWithoutAuditCommentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AssessmentCreateWithoutOrganizationInput = {
    id?: string
    score?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutOrganizationInput = {
    id?: string
    score?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutOrganizationInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutOrganizationInput, AssessmentUncheckedCreateWithoutOrganizationInput>
  }

  export type AssessmentCreateManyOrganizationInputEnvelope = {
    data: AssessmentCreateManyOrganizationInput | AssessmentCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutOrganizationInput, AssessmentUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AssessmentCreateWithoutOrganizationInput, AssessmentUncheckedCreateWithoutOrganizationInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutOrganizationInput, AssessmentUncheckedUpdateWithoutOrganizationInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutOrganizationInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AssessmentScalarWhereInput = {
    AND?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    OR?: AssessmentScalarWhereInput[]
    NOT?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    id?: StringFilter<"Assessment"> | string
    organizationId?: StringFilter<"Assessment"> | string
    score?: FloatFilter<"Assessment"> | number
    status?: StringFilter<"Assessment"> | string
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
  }

  export type OrganizationCreateWithoutAssessmentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUncheckedCreateWithoutAssessmentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationCreateOrConnectWithoutAssessmentsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAssessmentsInput, OrganizationUncheckedCreateWithoutAssessmentsInput>
  }

  export type AnswerCreateWithoutAssessmentInput = {
    id?: string
    response: string
    evidenceUrl?: string | null
    evidenceText?: string | null
    aiVerified?: boolean | null
    aiReasoning?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutAssessmentInput = {
    id?: string
    questionId: string
    response: string
    evidenceUrl?: string | null
    evidenceText?: string | null
    aiVerified?: boolean | null
    aiReasoning?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutAssessmentInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAssessmentInput, AnswerUncheckedCreateWithoutAssessmentInput>
  }

  export type AnswerCreateManyAssessmentInputEnvelope = {
    data: AnswerCreateManyAssessmentInput | AnswerCreateManyAssessmentInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutAssessmentsInput = {
    update: XOR<OrganizationUpdateWithoutAssessmentsInput, OrganizationUncheckedUpdateWithoutAssessmentsInput>
    create: XOR<OrganizationCreateWithoutAssessmentsInput, OrganizationUncheckedCreateWithoutAssessmentsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAssessmentsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAssessmentsInput, OrganizationUncheckedUpdateWithoutAssessmentsInput>
  }

  export type OrganizationUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutAssessmentInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutAssessmentInput, AnswerUncheckedUpdateWithoutAssessmentInput>
    create: XOR<AnswerCreateWithoutAssessmentInput, AnswerUncheckedCreateWithoutAssessmentInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutAssessmentInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutAssessmentInput, AnswerUncheckedUpdateWithoutAssessmentInput>
  }

  export type AnswerUpdateManyWithWhereWithoutAssessmentInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAssessmentInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    assessmentId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    response?: StringFilter<"Answer"> | string
    evidenceUrl?: StringNullableFilter<"Answer"> | string | null
    evidenceText?: StringNullableFilter<"Answer"> | string | null
    aiVerified?: BoolNullableFilter<"Answer"> | boolean | null
    aiReasoning?: StringNullableFilter<"Answer"> | string | null
    verifiedAt?: DateTimeNullableFilter<"Answer"> | Date | string | null
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    response: string
    evidenceUrl?: string | null
    evidenceText?: string | null
    aiVerified?: boolean | null
    aiReasoning?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assessment: AssessmentCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    assessmentId: string
    response: string
    evidenceUrl?: string | null
    evidenceText?: string | null
    aiVerified?: boolean | null
    aiReasoning?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type MappingCreateWithoutQuestionInput = {
    id?: string
    clause: string
    description: string
    framework: FrameworkCreateNestedOneWithoutMappingsInput
  }

  export type MappingUncheckedCreateWithoutQuestionInput = {
    id?: string
    frameworkId: string
    clause: string
    description: string
  }

  export type MappingCreateOrConnectWithoutQuestionInput = {
    where: MappingWhereUniqueInput
    create: XOR<MappingCreateWithoutQuestionInput, MappingUncheckedCreateWithoutQuestionInput>
  }

  export type MappingCreateManyQuestionInputEnvelope = {
    data: MappingCreateManyQuestionInput | MappingCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type RemediationTaskCreateWithoutQuestionInput = {
    id?: string
    assignedTo?: string | null
    dueDate?: Date | string | null
    status?: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemediationTaskUncheckedCreateWithoutQuestionInput = {
    id?: string
    assignedTo?: string | null
    dueDate?: Date | string | null
    status?: string
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemediationTaskCreateOrConnectWithoutQuestionInput = {
    where: RemediationTaskWhereUniqueInput
    create: XOR<RemediationTaskCreateWithoutQuestionInput, RemediationTaskUncheckedCreateWithoutQuestionInput>
  }

  export type AuditCommentCreateWithoutQuestionInput = {
    id?: string
    author: string
    text: string
    createdAt?: Date | string
  }

  export type AuditCommentUncheckedCreateWithoutQuestionInput = {
    id?: string
    author: string
    text: string
    createdAt?: Date | string
  }

  export type AuditCommentCreateOrConnectWithoutQuestionInput = {
    where: AuditCommentWhereUniqueInput
    create: XOR<AuditCommentCreateWithoutQuestionInput, AuditCommentUncheckedCreateWithoutQuestionInput>
  }

  export type AuditCommentCreateManyQuestionInputEnvelope = {
    data: AuditCommentCreateManyQuestionInput | AuditCommentCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type MappingUpsertWithWhereUniqueWithoutQuestionInput = {
    where: MappingWhereUniqueInput
    update: XOR<MappingUpdateWithoutQuestionInput, MappingUncheckedUpdateWithoutQuestionInput>
    create: XOR<MappingCreateWithoutQuestionInput, MappingUncheckedCreateWithoutQuestionInput>
  }

  export type MappingUpdateWithWhereUniqueWithoutQuestionInput = {
    where: MappingWhereUniqueInput
    data: XOR<MappingUpdateWithoutQuestionInput, MappingUncheckedUpdateWithoutQuestionInput>
  }

  export type MappingUpdateManyWithWhereWithoutQuestionInput = {
    where: MappingScalarWhereInput
    data: XOR<MappingUpdateManyMutationInput, MappingUncheckedUpdateManyWithoutQuestionInput>
  }

  export type MappingScalarWhereInput = {
    AND?: MappingScalarWhereInput | MappingScalarWhereInput[]
    OR?: MappingScalarWhereInput[]
    NOT?: MappingScalarWhereInput | MappingScalarWhereInput[]
    id?: StringFilter<"Mapping"> | string
    questionId?: StringFilter<"Mapping"> | string
    frameworkId?: StringFilter<"Mapping"> | string
    clause?: StringFilter<"Mapping"> | string
    description?: StringFilter<"Mapping"> | string
  }

  export type RemediationTaskUpsertWithoutQuestionInput = {
    update: XOR<RemediationTaskUpdateWithoutQuestionInput, RemediationTaskUncheckedUpdateWithoutQuestionInput>
    create: XOR<RemediationTaskCreateWithoutQuestionInput, RemediationTaskUncheckedCreateWithoutQuestionInput>
    where?: RemediationTaskWhereInput
  }

  export type RemediationTaskUpdateToOneWithWhereWithoutQuestionInput = {
    where?: RemediationTaskWhereInput
    data: XOR<RemediationTaskUpdateWithoutQuestionInput, RemediationTaskUncheckedUpdateWithoutQuestionInput>
  }

  export type RemediationTaskUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemediationTaskUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditCommentUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AuditCommentWhereUniqueInput
    update: XOR<AuditCommentUpdateWithoutQuestionInput, AuditCommentUncheckedUpdateWithoutQuestionInput>
    create: XOR<AuditCommentCreateWithoutQuestionInput, AuditCommentUncheckedCreateWithoutQuestionInput>
  }

  export type AuditCommentUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AuditCommentWhereUniqueInput
    data: XOR<AuditCommentUpdateWithoutQuestionInput, AuditCommentUncheckedUpdateWithoutQuestionInput>
  }

  export type AuditCommentUpdateManyWithWhereWithoutQuestionInput = {
    where: AuditCommentScalarWhereInput
    data: XOR<AuditCommentUpdateManyMutationInput, AuditCommentUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AuditCommentScalarWhereInput = {
    AND?: AuditCommentScalarWhereInput | AuditCommentScalarWhereInput[]
    OR?: AuditCommentScalarWhereInput[]
    NOT?: AuditCommentScalarWhereInput | AuditCommentScalarWhereInput[]
    id?: StringFilter<"AuditComment"> | string
    questionId?: StringFilter<"AuditComment"> | string
    author?: StringFilter<"AuditComment"> | string
    text?: StringFilter<"AuditComment"> | string
    createdAt?: DateTimeFilter<"AuditComment"> | Date | string
  }

  export type AssessmentCreateWithoutAnswersInput = {
    id?: string
    score?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAssessmentsInput
  }

  export type AssessmentUncheckedCreateWithoutAnswersInput = {
    id?: string
    organizationId: string
    score?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentCreateOrConnectWithoutAnswersInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutAnswersInput, AssessmentUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    domain: string
    text: string
    requiresDoc?: boolean
    mappings?: MappingCreateNestedManyWithoutQuestionInput
    remediationTask?: RemediationTaskCreateNestedOneWithoutQuestionInput
    auditComments?: AuditCommentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    domain: string
    text: string
    requiresDoc?: boolean
    mappings?: MappingUncheckedCreateNestedManyWithoutQuestionInput
    remediationTask?: RemediationTaskUncheckedCreateNestedOneWithoutQuestionInput
    auditComments?: AuditCommentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type AssessmentUpsertWithoutAnswersInput = {
    update: XOR<AssessmentUpdateWithoutAnswersInput, AssessmentUncheckedUpdateWithoutAnswersInput>
    create: XOR<AssessmentCreateWithoutAnswersInput, AssessmentUncheckedCreateWithoutAnswersInput>
    where?: AssessmentWhereInput
  }

  export type AssessmentUpdateToOneWithWhereWithoutAnswersInput = {
    where?: AssessmentWhereInput
    data: XOR<AssessmentUpdateWithoutAnswersInput, AssessmentUncheckedUpdateWithoutAnswersInput>
  }

  export type AssessmentUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAssessmentsNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    requiresDoc?: BoolFieldUpdateOperationsInput | boolean
    mappings?: MappingUpdateManyWithoutQuestionNestedInput
    remediationTask?: RemediationTaskUpdateOneWithoutQuestionNestedInput
    auditComments?: AuditCommentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    requiresDoc?: BoolFieldUpdateOperationsInput | boolean
    mappings?: MappingUncheckedUpdateManyWithoutQuestionNestedInput
    remediationTask?: RemediationTaskUncheckedUpdateOneWithoutQuestionNestedInput
    auditComments?: AuditCommentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type MappingCreateWithoutFrameworkInput = {
    id?: string
    clause: string
    description: string
    question: QuestionCreateNestedOneWithoutMappingsInput
  }

  export type MappingUncheckedCreateWithoutFrameworkInput = {
    id?: string
    questionId: string
    clause: string
    description: string
  }

  export type MappingCreateOrConnectWithoutFrameworkInput = {
    where: MappingWhereUniqueInput
    create: XOR<MappingCreateWithoutFrameworkInput, MappingUncheckedCreateWithoutFrameworkInput>
  }

  export type MappingCreateManyFrameworkInputEnvelope = {
    data: MappingCreateManyFrameworkInput | MappingCreateManyFrameworkInput[]
    skipDuplicates?: boolean
  }

  export type MappingUpsertWithWhereUniqueWithoutFrameworkInput = {
    where: MappingWhereUniqueInput
    update: XOR<MappingUpdateWithoutFrameworkInput, MappingUncheckedUpdateWithoutFrameworkInput>
    create: XOR<MappingCreateWithoutFrameworkInput, MappingUncheckedCreateWithoutFrameworkInput>
  }

  export type MappingUpdateWithWhereUniqueWithoutFrameworkInput = {
    where: MappingWhereUniqueInput
    data: XOR<MappingUpdateWithoutFrameworkInput, MappingUncheckedUpdateWithoutFrameworkInput>
  }

  export type MappingUpdateManyWithWhereWithoutFrameworkInput = {
    where: MappingScalarWhereInput
    data: XOR<MappingUpdateManyMutationInput, MappingUncheckedUpdateManyWithoutFrameworkInput>
  }

  export type QuestionCreateWithoutMappingsInput = {
    id?: string
    domain: string
    text: string
    requiresDoc?: boolean
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    remediationTask?: RemediationTaskCreateNestedOneWithoutQuestionInput
    auditComments?: AuditCommentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutMappingsInput = {
    id?: string
    domain: string
    text: string
    requiresDoc?: boolean
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    remediationTask?: RemediationTaskUncheckedCreateNestedOneWithoutQuestionInput
    auditComments?: AuditCommentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutMappingsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutMappingsInput, QuestionUncheckedCreateWithoutMappingsInput>
  }

  export type FrameworkCreateWithoutMappingsInput = {
    id?: string
    name: string
    description: string
  }

  export type FrameworkUncheckedCreateWithoutMappingsInput = {
    id?: string
    name: string
    description: string
  }

  export type FrameworkCreateOrConnectWithoutMappingsInput = {
    where: FrameworkWhereUniqueInput
    create: XOR<FrameworkCreateWithoutMappingsInput, FrameworkUncheckedCreateWithoutMappingsInput>
  }

  export type QuestionUpsertWithoutMappingsInput = {
    update: XOR<QuestionUpdateWithoutMappingsInput, QuestionUncheckedUpdateWithoutMappingsInput>
    create: XOR<QuestionCreateWithoutMappingsInput, QuestionUncheckedCreateWithoutMappingsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutMappingsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutMappingsInput, QuestionUncheckedUpdateWithoutMappingsInput>
  }

  export type QuestionUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    requiresDoc?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    remediationTask?: RemediationTaskUpdateOneWithoutQuestionNestedInput
    auditComments?: AuditCommentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    requiresDoc?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    remediationTask?: RemediationTaskUncheckedUpdateOneWithoutQuestionNestedInput
    auditComments?: AuditCommentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type FrameworkUpsertWithoutMappingsInput = {
    update: XOR<FrameworkUpdateWithoutMappingsInput, FrameworkUncheckedUpdateWithoutMappingsInput>
    create: XOR<FrameworkCreateWithoutMappingsInput, FrameworkUncheckedCreateWithoutMappingsInput>
    where?: FrameworkWhereInput
  }

  export type FrameworkUpdateToOneWithWhereWithoutMappingsInput = {
    where?: FrameworkWhereInput
    data: XOR<FrameworkUpdateWithoutMappingsInput, FrameworkUncheckedUpdateWithoutMappingsInput>
  }

  export type FrameworkUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FrameworkUncheckedUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateWithoutRemediationTaskInput = {
    id?: string
    domain: string
    text: string
    requiresDoc?: boolean
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    mappings?: MappingCreateNestedManyWithoutQuestionInput
    auditComments?: AuditCommentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutRemediationTaskInput = {
    id?: string
    domain: string
    text: string
    requiresDoc?: boolean
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    mappings?: MappingUncheckedCreateNestedManyWithoutQuestionInput
    auditComments?: AuditCommentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutRemediationTaskInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutRemediationTaskInput, QuestionUncheckedCreateWithoutRemediationTaskInput>
  }

  export type QuestionUpsertWithoutRemediationTaskInput = {
    update: XOR<QuestionUpdateWithoutRemediationTaskInput, QuestionUncheckedUpdateWithoutRemediationTaskInput>
    create: XOR<QuestionCreateWithoutRemediationTaskInput, QuestionUncheckedCreateWithoutRemediationTaskInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutRemediationTaskInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutRemediationTaskInput, QuestionUncheckedUpdateWithoutRemediationTaskInput>
  }

  export type QuestionUpdateWithoutRemediationTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    requiresDoc?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    mappings?: MappingUpdateManyWithoutQuestionNestedInput
    auditComments?: AuditCommentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutRemediationTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    requiresDoc?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    mappings?: MappingUncheckedUpdateManyWithoutQuestionNestedInput
    auditComments?: AuditCommentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateWithoutAuditCommentsInput = {
    id?: string
    domain: string
    text: string
    requiresDoc?: boolean
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    mappings?: MappingCreateNestedManyWithoutQuestionInput
    remediationTask?: RemediationTaskCreateNestedOneWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAuditCommentsInput = {
    id?: string
    domain: string
    text: string
    requiresDoc?: boolean
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    mappings?: MappingUncheckedCreateNestedManyWithoutQuestionInput
    remediationTask?: RemediationTaskUncheckedCreateNestedOneWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAuditCommentsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAuditCommentsInput, QuestionUncheckedCreateWithoutAuditCommentsInput>
  }

  export type QuestionUpsertWithoutAuditCommentsInput = {
    update: XOR<QuestionUpdateWithoutAuditCommentsInput, QuestionUncheckedUpdateWithoutAuditCommentsInput>
    create: XOR<QuestionCreateWithoutAuditCommentsInput, QuestionUncheckedCreateWithoutAuditCommentsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAuditCommentsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAuditCommentsInput, QuestionUncheckedUpdateWithoutAuditCommentsInput>
  }

  export type QuestionUpdateWithoutAuditCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    requiresDoc?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    mappings?: MappingUpdateManyWithoutQuestionNestedInput
    remediationTask?: RemediationTaskUpdateOneWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAuditCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    requiresDoc?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    mappings?: MappingUncheckedUpdateManyWithoutQuestionNestedInput
    remediationTask?: RemediationTaskUncheckedUpdateOneWithoutQuestionNestedInput
  }

  export type AssessmentCreateManyOrganizationInput = {
    id?: string
    score?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyAssessmentInput = {
    id?: string
    questionId: string
    response: string
    evidenceUrl?: string | null
    evidenceText?: string | null
    aiVerified?: boolean | null
    aiReasoning?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceText?: NullableStringFieldUpdateOperationsInput | string | null
    aiVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceText?: NullableStringFieldUpdateOperationsInput | string | null
    aiVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceText?: NullableStringFieldUpdateOperationsInput | string | null
    aiVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    assessmentId: string
    response: string
    evidenceUrl?: string | null
    evidenceText?: string | null
    aiVerified?: boolean | null
    aiReasoning?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MappingCreateManyQuestionInput = {
    id?: string
    frameworkId: string
    clause: string
    description: string
  }

  export type AuditCommentCreateManyQuestionInput = {
    id?: string
    author: string
    text: string
    createdAt?: Date | string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceText?: NullableStringFieldUpdateOperationsInput | string | null
    aiVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: AssessmentUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceText?: NullableStringFieldUpdateOperationsInput | string | null
    aiVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceText?: NullableStringFieldUpdateOperationsInput | string | null
    aiVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MappingUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    framework?: FrameworkUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type MappingUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MappingUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AuditCommentUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditCommentUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditCommentUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MappingCreateManyFrameworkInput = {
    id?: string
    questionId: string
    clause: string
    description: string
  }

  export type MappingUpdateWithoutFrameworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type MappingUncheckedUpdateWithoutFrameworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MappingUncheckedUpdateManyWithoutFrameworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    clause?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}