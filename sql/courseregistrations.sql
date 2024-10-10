CREATE TABLE
  public.courseregistrations (
    "courseRegID" serial NOT NULL,
    "studentID" character varying(255) NOT NULL,
    "purchaseDate" timestamp without time zone NULL DEFAULT CURRENT_TIMESTAMP,
    "courseProgress" integer NOT NULL DEFAULT 0,
    "lastReadChapter" character varying(255) NULL,
    "earnedXP" integer NOT NULL DEFAULT 0,
    "isFavorite" boolean NULL DEFAULT true,
    "checkoutSessionID" character varying(255) NULL,
    "courseID" character varying(255) NULL,
    "stripeItemID" character varying(255) NULL
  );

ALTER TABLE
  public.courseregistrations
ADD
  CONSTRAINT courseregistrations_pkey PRIMARY KEY (courseRegID)