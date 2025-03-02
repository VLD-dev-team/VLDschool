CREATE TABLE
  public.users (
    id serial NOT NULL,
    name character varying(255) NULL,
    email character varying(255) NULL,
    "emailVerified" timestamp with time zone NULL,
    image text NULL,
    role character varying(50) NULL DEFAULT 'student'::character varying,
    status character varying(50) NULL DEFAULT 'active'::character varying,
    "stripeCustomerID" character varying(255) NULL,
    "lastViewedChapterURL" character varying(255) NULL
  );

ALTER TABLE
  public.users
ADD
  CONSTRAINT users_pkey PRIMARY KEY (id)