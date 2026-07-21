import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AuthStatus, ChatMessage, ChatSession, ChatSessionInput, ChatStats, DeleteResult, HealthStatus, LogoutResult, MessageInput } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetMeUrl: () => string;
/**
 * Returns the currently logged-in Roblox user, or null if not authenticated
 * @summary Get current authenticated user
 */
export declare const getMe: (options?: RequestInit) => Promise<AuthStatus>;
export declare const getGetMeQueryKey: () => readonly ["/api/auth/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<unknown>;
/**
 * @summary Get current authenticated user
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getLogoutUrl: () => string;
/**
 * Clears the session and logs the user out
 * @summary Log out current user
 */
export declare const logout: (options?: RequestInit) => Promise<LogoutResult>;
export declare const getLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export type LogoutMutationResult = NonNullable<Awaited<ReturnType<typeof logout>>>;
export type LogoutMutationError = ErrorType<unknown>;
/**
* @summary Log out current user
*/
export declare const useLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export declare const getListChatSessionsUrl: () => string;
/**
 * Returns all chat sessions for the current user
 * @summary List chat sessions
 */
export declare const listChatSessions: (options?: RequestInit) => Promise<ChatSession[]>;
export declare const getListChatSessionsQueryKey: () => readonly ["/api/chat/sessions"];
export declare const getListChatSessionsQueryOptions: <TData = Awaited<ReturnType<typeof listChatSessions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listChatSessions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listChatSessions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListChatSessionsQueryResult = NonNullable<Awaited<ReturnType<typeof listChatSessions>>>;
export type ListChatSessionsQueryError = ErrorType<unknown>;
/**
 * @summary List chat sessions
 */
export declare function useListChatSessions<TData = Awaited<ReturnType<typeof listChatSessions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listChatSessions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateChatSessionUrl: () => string;
/**
 * Creates a new chat session for a Roblox project
 * @summary Create a new chat session
 */
export declare const createChatSession: (chatSessionInput: ChatSessionInput, options?: RequestInit) => Promise<ChatSession>;
export declare const getCreateChatSessionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createChatSession>>, TError, {
        data: BodyType<ChatSessionInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createChatSession>>, TError, {
    data: BodyType<ChatSessionInput>;
}, TContext>;
export type CreateChatSessionMutationResult = NonNullable<Awaited<ReturnType<typeof createChatSession>>>;
export type CreateChatSessionMutationBody = BodyType<ChatSessionInput>;
export type CreateChatSessionMutationError = ErrorType<unknown>;
/**
* @summary Create a new chat session
*/
export declare const useCreateChatSession: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createChatSession>>, TError, {
        data: BodyType<ChatSessionInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createChatSession>>, TError, {
    data: BodyType<ChatSessionInput>;
}, TContext>;
export declare const getGetChatSessionUrl: (sessionId: string) => string;
/**
 * @summary Get a specific chat session
 */
export declare const getChatSession: (sessionId: string, options?: RequestInit) => Promise<ChatSession>;
export declare const getGetChatSessionQueryKey: (sessionId: string) => readonly [`/api/chat/sessions/${string}`];
export declare const getGetChatSessionQueryOptions: <TData = Awaited<ReturnType<typeof getChatSession>>, TError = ErrorType<void>>(sessionId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getChatSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getChatSession>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetChatSessionQueryResult = NonNullable<Awaited<ReturnType<typeof getChatSession>>>;
export type GetChatSessionQueryError = ErrorType<void>;
/**
 * @summary Get a specific chat session
 */
export declare function useGetChatSession<TData = Awaited<ReturnType<typeof getChatSession>>, TError = ErrorType<void>>(sessionId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getChatSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDeleteChatSessionUrl: (sessionId: string) => string;
/**
 * @summary Delete a chat session
 */
export declare const deleteChatSession: (sessionId: string, options?: RequestInit) => Promise<DeleteResult>;
export declare const getDeleteChatSessionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteChatSession>>, TError, {
        sessionId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteChatSession>>, TError, {
    sessionId: string;
}, TContext>;
export type DeleteChatSessionMutationResult = NonNullable<Awaited<ReturnType<typeof deleteChatSession>>>;
export type DeleteChatSessionMutationError = ErrorType<unknown>;
/**
* @summary Delete a chat session
*/
export declare const useDeleteChatSession: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteChatSession>>, TError, {
        sessionId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteChatSession>>, TError, {
    sessionId: string;
}, TContext>;
export declare const getListMessagesUrl: (sessionId: string) => string;
/**
 * @summary List messages in a session
 */
export declare const listMessages: (sessionId: string, options?: RequestInit) => Promise<ChatMessage[]>;
export declare const getListMessagesQueryKey: (sessionId: string) => readonly [`/api/chat/sessions/${string}/messages`];
export declare const getListMessagesQueryOptions: <TData = Awaited<ReturnType<typeof listMessages>>, TError = ErrorType<unknown>>(sessionId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listMessages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof listMessages>>>;
export type ListMessagesQueryError = ErrorType<unknown>;
/**
 * @summary List messages in a session
 */
export declare function useListMessages<TData = Awaited<ReturnType<typeof listMessages>>, TError = ErrorType<unknown>>(sessionId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSendMessageUrl: (sessionId: string) => string;
/**
 * Sends a user message and returns the AI assistant response with optional Roblox script modifications
 * @summary Send a message and get AI response
 */
export declare const sendMessage: (sessionId: string, messageInput: MessageInput, options?: RequestInit) => Promise<ChatMessage>;
export declare const getSendMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
        sessionId: string;
        data: BodyType<MessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
    sessionId: string;
    data: BodyType<MessageInput>;
}, TContext>;
export type SendMessageMutationResult = NonNullable<Awaited<ReturnType<typeof sendMessage>>>;
export type SendMessageMutationBody = BodyType<MessageInput>;
export type SendMessageMutationError = ErrorType<unknown>;
/**
* @summary Send a message and get AI response
*/
export declare const useSendMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
        sessionId: string;
        data: BodyType<MessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendMessage>>, TError, {
    sessionId: string;
    data: BodyType<MessageInput>;
}, TContext>;
export declare const getGetChatStatsUrl: () => string;
/**
 * Returns summary stats - total sessions, messages, recent activity
 * @summary Get chat statistics summary
 */
export declare const getChatStats: (options?: RequestInit) => Promise<ChatStats>;
export declare const getGetChatStatsQueryKey: () => readonly ["/api/chat/stats"];
export declare const getGetChatStatsQueryOptions: <TData = Awaited<ReturnType<typeof getChatStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getChatStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getChatStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetChatStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getChatStats>>>;
export type GetChatStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get chat statistics summary
 */
export declare function useGetChatStats<TData = Awaited<ReturnType<typeof getChatStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getChatStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map