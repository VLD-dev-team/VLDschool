CREATE TABLE
  public.accounts (
    id serial NOT NULL,
    "userId" integer NOT NULL,
    type
      character varying(255) NOT NULL,
      provider character varying(255) NOT NULL,
      "providerAccountId" character varying(255) NOT NULL,
      refresh_token text NULL,
      access_token text NULL,
      expires_at bigint NULL,
      id_token text NULL,
      scope text NULL,
      session_state text NULL,
      token_type text NULL
  );

ALTER TABLE
  public.accounts
ADD
  CONSTRAINT accounts_pkey PRIMARY KEY (id)